import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { getEvent, handleStripeWebhook } from "@kfsoftware/billing-next";
import { prepareConnection } from "../../../gateway/gateway";
import { config as backendConfig } from "../../../config/backend";
import { getConnection, getConnectionManager } from "typeorm";
import { BillingTenant } from "@kfsoftware/billing-next/dist/models";
const stripe = new Stripe(backendConfig.stripe.secretKey, {
  apiVersion: "2020-08-27",
});
async function buffer(readable: any) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}
export default async function stripeWebhook(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const buf = await buffer(req);
  const event = getEvent(
    req.headers,
    buf,
    stripe,
    backendConfig.stripe.webhookSecret!
  );
  if (!event) {
    return res.status(400).send({
      message: "Invalid event",
    });
  }
  await prepareConnection(backendConfig);
  const connection = getConnection();
  const billingTenantRepo = connection.getRepository(BillingTenant);
  await handleStripeWebhook(event, billingTenantRepo, stripe);
  return res.status(200).send({
    message: "Event processed",
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
