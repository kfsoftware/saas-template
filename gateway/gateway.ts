import {
  ApolloGateway,
  LocalGraphQLDataSource,
  RemoteGraphQLDataSource,
} from "@apollo/gateway";
import {
  Auth0Provider as AuthProvider,
  getFederatedSchema as getAuthFederatedSchema,
} from "@kfsoftware/auth-next";
import {
  getFederatedSchema as getBillingFederatedSchema,
  models as billingModels,
} from "@kfsoftware/billing-next";
import {
  Auth0Provider,
  getFederatedSchema as getTenantFederatedSchema,
  models,
} from "@kfsoftware/tenant-next";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { ManagementClient } from "auth0";
import { once } from "lodash-es";
import shortUUID from "short-uuid";
import { ResourceOwnerPassword } from "simple-oauth2";
import Stripe from "stripe";
import { createConnection, getConnection } from "typeorm";
import { config, Configuration } from "../config/backend";

import { Todo } from "../db/models";
import { getFederatedSchema as getAppFederatedSchema } from "../schemas/schema";
import { createJwtMiddleware } from "./middlewares";

let connectionReadyPromise: Promise<void> | null = null;
// THIS function is requires because of the HMR behaviour in Next.JS
export function prepareConnection(config: Configuration) {
  if (!connectionReadyPromise) {
    connectionReadyPromise = (async () => {
      // clean up old connection that references outdated hot-reload classes
      try {
        const staleConnection = getConnection();
        await staleConnection.close();
      } catch (error) {
        // no stale connection to clean up
      }

      // wait for new default connection
      await createConnection({
        type: "postgres",
        host: config.database.host,
        port: config.database.port,
        username: config.database.username,
        password: config.database.password,
        database: config.database.database,
        synchronize: true,
        extra: {
          connectionLimit: 1,
        },
        entities: [
          models.Tenant,
          models.TenantUser,
          billingModels.BillingTenant,
          Todo,
        ],
      });
    })();
  }

  return connectionReadyPromise;
}
export async function getGateway() {
  await prepareConnection(config);
  const connection = getConnection();
  const USERNAME_PASSWORD_CONN = config.auth0.usernamePasswordConn;
  const appSchema = await getAppFederatedSchema(connection);
  const mgmtClient = new ManagementClient({
    domain: config.auth0.domain,
    clientId: config.auth0.clientId,
    clientSecret: config.auth0.clientSecret,
  });
  const stripe = new Stripe(config.stripe.secretKey, {
    apiVersion: "2020-08-27",
  });
  const authConfig = {
    jwks: config.auth0.jwks,
    issuer: config.auth0.issuer,
  };
  const userInterface = new Auth0Provider(USERNAME_PASSWORD_CONN, mgmtClient);

  const tenantSchema = getTenantFederatedSchema(connection, userInterface);
  const serviceList = [
    {
      name: "auth",
      url: "http://auth",
    },
    {
      name: "tenant",
      url: "http://tenant",
    },
    {
      name: "billing",
      url: "http://billing",
    },
    {
      name: "app",
      url: "http://app",
    },
  ];

  const authProvider = new AuthProvider(mgmtClient);
  const authSchema = getAuthFederatedSchema(authProvider);

  const billingSchema = getBillingFederatedSchema(
    connection,
    stripe,
    config.stripe.plans
  );
  const gateway = new ApolloGateway({
    serviceList,
    __exposeQueryPlanExperimental: false,
    buildService: ({ name, url }) => {
      if (name === "auth") {
        return new LocalGraphQLDataSource(authSchema);
      } else if (name === "tenant") {
        return new LocalGraphQLDataSource(tenantSchema);
      } else if (name === "billing") {
        return new LocalGraphQLDataSource(billingSchema);
      } else if (name === "app") {
        return new LocalGraphQLDataSource(appSchema);
      } else {
        return new RemoteGraphQLDataSource({
          url,
          willSendRequest(props) {
            const { request, context } = props;
            const { headers, jwt } = context as any;
            if (headers && headers.authorization) {
              request?.http?.headers.set(
                "Authorization",
                headers.authorization
              );
            } else if (jwt) {
              request?.http?.headers.set("Authorization", `Bearer ${jwt}`);
            }
            if (headers && headers["x-tenant"]) {
              request?.http?.headers.set("x-tenant", headers["x-tenant"]);
            }
          },
        });
      }
    },
  });
  const { executor, schema } = await gateway.load();

  const userMiddleware = createJwtMiddleware(
    authConfig.jwks,
    authConfig.issuer
  );
  const apolloServer = new ApolloServer({
    executor,
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
    context: async ({ req }) => {
      const headers = req.headers;
      const user = await userMiddleware(req.headers);
      let jwt = "";
      if (req.headers.authorization) {
        jwt = req.headers.authorization.split(" ")[1];
      }
      return {
        headers,
        user,
      };
    },
  });
  await apolloServer.start();
  return {
    apolloServer,
    gateway,
  };
}
export const getGatewayOnce = once(getGateway);
