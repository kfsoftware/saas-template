import { BillingPlan } from "@kfsoftware/billing-next";

export interface Configuration {
  auth0: {
    usernamePasswordConn: string;
    jwks: string;
    issuer: string;
    domain: string;
    clientId: string;
    clientSecret: string;
  };
  database: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
  stripe: {
    secretKey: string;
    webhookSecret: string;
    plans: BillingPlan[];
  };
}
const MAX_PLANS = 3;
const plans: BillingPlan[] = [];
for (let planIdx = 0; planIdx < MAX_PLANS; planIdx++) {
  try {
    const planId = process.env[`STRIPE_PLANS_${planIdx}_PLAN_ID`];
    const planDescription = process.env[`STRIPE_PLANS_${planIdx}_DESCRIPTION`];
    const planSlug = process.env[`STRIPE_PLANS_${planIdx}_SLUG`];
    const planTrialPeriod = parseInt(
      process.env[`STRIPE_PLANS_${planIdx}_TRIAL_PERIOD_DAYS`] || "0"
    );
    const claims: string[] = JSON.parse(
      process.env[`STRIPE_PLANS_${planIdx}_CLAIMS`]?.replace(/\\"/g, `"`) ||
        "[]"
    );
    if (planId && planDescription && planSlug && !isNaN(planTrialPeriod)) {
      plans.push({
        planId,
        description: planDescription,
        slug: planSlug,
        trialPeriodDays: planTrialPeriod,
        claims: claims.map((claim) => ({ text: claim })),
      });
    }
  } catch (e) {
    console.log(`Failed to read plan ${e}`);
  }
}
export const config: Configuration = {
  auth0: {
    usernamePasswordConn: process.env.AUTH0_USERNAME_PASSWORD_CONN,
    jwks: process.env.AUTH0_JWKS,
    issuer: process.env.AUTH0_ISSUER,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN,
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans,
  },
};
