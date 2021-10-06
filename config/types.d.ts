/// <reference types="node" />

// Extend the NodeJS namespace with Next.js-defined properties
declare namespace NodeJS {
  interface Process {
    readonly browser: boolean;
  }

  interface ProcessEnv {
    readonly AUTH0_USERNAME_PASSWORD_CONN: string;
    readonly AUTH0_JWKS: string;
    readonly AUTH0_ISSUER: string;
    readonly AUTH0_CLIENT_ID: string;
    readonly AUTH0_CLIENT_SECRET: string;
    readonly AUTH0_DOMAIN: string;
    readonly DATABASE_HOST: string;
    readonly DATABASE_PORT: string;
    readonly DATABASE_USER: string;
    readonly DATABASE_PASSWORD: string;
    readonly DATABASE_NAME: string;
    readonly STRIPE_SECRET: string;
    readonly STRIPE_WEBHOOK_SECRET: string;
  }
}
