import "../styles/fonts.css";
import "../styles/tailwind.css";

import { useRouter } from "next/router";
import { AuthProvider } from "@kfsoftware/auth";
import {
  AuthorizedApolloProvider,
  GeneralProvider,
  TenantProvider,
} from "@kfsoftware/common";
import { ConfigProvider } from "@kfsoftware/config";
import { ErrorProvider } from "@kfsoftware/error";
import Link from "next/link";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import type { AppProps } from "next/app";
import { BillingProvider } from "@kfsoftware/billing";
const config = {
  companyName: "Kung Fu Software S.L.",
  name: "TODO SaaS",
};

interface LogoParams {
  className: string;
}
function Logo({ className = "" }: LogoParams) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`${className} text-white`}
      fill="currentColor"
      version="1.1"
      width="3187.5"
      height="1113.648881709815"
      viewBox="0 0 3187.5 1113.648881709815"
    >
      <g transform="scale(9.375) translate(10, 10)">
        <defs id="SvgjsDefs2294" />
        <g id="SvgjsG2295" transform="matrix(2,0,0,2,-14,-14)" fill="#fff">
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M56,9H8c-0.552,0-1,0.448-1,1v44c0,0.553,0.448,1,1,1h48c0.553,0,1-0.447,1-1V10C57,9.448,56.553,9,56,9z M30.707,32.707   l-10,10C20.512,42.902,20.256,43,20,43s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L28.586,32l-9.293-9.293   c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l10,10C31.098,31.684,31.098,32.316,30.707,32.707z M44,43H34   c-0.553,0-1-0.447-1-1s0.447-1,1-1h10c0.553,0,1,0.447,1,1S44.553,43,44,43z" />
          </g>
        </g>
        <g
          id="SvgjsG2296"
          transform="matrix(3.099279104067343,0,0,3.099279104067343,115.15737639989477,-25.726000431532622)"
          fill="#fff"
        >
          <path d="M1.5625 8.515999999999998 l6.3086 0 l0 11.953 l6.9336 -11.953 l7.2852 0 l-9.2969 15.996 l10.801 15.488 l-7.6758 0 l-8.0469 -11.563 l0 11.563 l-6.3086 0 l0 -31.484 z M25.9375 8.515999999999998 l18.887 0 l0 6.2891 l-12.578 0 l0 6.3086 l9.4336 0 l0 6.2891 l-9.4336 0 l0 6.2891 l0 6.3086 l-6.3086 0 l0 -12.598 l0 -6.2891 l0 -12.598 z M56.52346875 33.7891 l-0.019531 -0.039063 c1.7383 0 3.1836 -1.4453 3.1836 -3.1836 c0 -1.3477 -0.52734 -2.207 -1.6016 -2.5977 c-2.2656 -0.83984 -1.7188 -0.64453 -3.9258 -1.4063 c-2.3242 -0.80078 -4.4727 -2.3828 -5.918 -4.3555 c-0.85938 -1.1719 -1.2891 -2.6172 -1.2891 -4.3555 c0 -2.6172 0.9375 -4.8633 2.8125 -6.7383 s4.1211 -2.8125 6.7578 -2.8125 c2.6172 0 4.8633 0.9375 6.7383 2.8125 s2.8125 4.1211 2.8125 6.7383 l-6.3477 0 c0 -1.7188 -1.4453 -3.1641 -3.1641 -3.1641 c-1.7383 0 -3.1836 1.4453 -3.1836 3.1836 c0 1.1328 0.44922 1.9922 1.3672 2.5781 c1.875 1.2109 1.6602 0.97656 3.9063 1.6406 c2.4219 0.70313 4.6094 2.207 6.1133 4.1406 c0.87891 1.1328 1.3281 2.5977 1.3281 4.375 c0 2.6367 -0.9375 4.8828 -2.8125 6.7578 s-4.1211 2.8125 -6.7383 2.8125 c-2.6367 0 -4.8828 -0.9375 -6.7578 -2.8125 s-2.8125 -4.1211 -2.8125 -6.7578 l6.3672 0 c0 1.7578 1.4258 3.1836 3.1836 3.1836 z" />
        </g>
      </g>
    </svg>
  );
}
function LogoOnWhite({ className = "" }: LogoParams) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="3187.5"
      height="1113.648881709815"
      className={`${className} text-white`}
      fill="currentColor"
      viewBox="0 0 3187.5 1113.648881709815"
    >
      <g transform="scale(9.375) translate(10, 10)">
        <defs id="SvgjsDefs2294" />
        <g id="SvgjsG2295" transform="matrix(2,0,0,2,-14,-14)" fill="#000">
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M56,9H8c-0.552,0-1,0.448-1,1v44c0,0.553,0.448,1,1,1h48c0.553,0,1-0.447,1-1V10C57,9.448,56.553,9,56,9z M30.707,32.707   l-10,10C20.512,42.902,20.256,43,20,43s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L28.586,32l-9.293-9.293   c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l10,10C31.098,31.684,31.098,32.316,30.707,32.707z M44,43H34   c-0.553,0-1-0.447-1-1s0.447-1,1-1h10c0.553,0,1,0.447,1,1S44.553,43,44,43z" />
          </g>
        </g>
        <g
          id="SvgjsG2296"
          transform="matrix(3.099279104067343,0,0,3.099279104067343,115.15737639989477,-25.726000431532622)"
          fill="#000"
        >
          <path d="M1.5625 8.515999999999998 l6.3086 0 l0 11.953 l6.9336 -11.953 l7.2852 0 l-9.2969 15.996 l10.801 15.488 l-7.6758 0 l-8.0469 -11.563 l0 11.563 l-6.3086 0 l0 -31.484 z M25.9375 8.515999999999998 l18.887 0 l0 6.2891 l-12.578 0 l0 6.3086 l9.4336 0 l0 6.2891 l-9.4336 0 l0 6.2891 l0 6.3086 l-6.3086 0 l0 -12.598 l0 -6.2891 l0 -12.598 z M56.52346875 33.7891 l-0.019531 -0.039063 c1.7383 0 3.1836 -1.4453 3.1836 -3.1836 c0 -1.3477 -0.52734 -2.207 -1.6016 -2.5977 c-2.2656 -0.83984 -1.7188 -0.64453 -3.9258 -1.4063 c-2.3242 -0.80078 -4.4727 -2.3828 -5.918 -4.3555 c-0.85938 -1.1719 -1.2891 -2.6172 -1.2891 -4.3555 c0 -2.6172 0.9375 -4.8633 2.8125 -6.7383 s4.1211 -2.8125 6.7578 -2.8125 c2.6172 0 4.8633 0.9375 6.7383 2.8125 s2.8125 4.1211 2.8125 6.7383 l-6.3477 0 c0 -1.7188 -1.4453 -3.1641 -3.1641 -3.1641 c-1.7383 0 -3.1836 1.4453 -3.1836 3.1836 c0 1.1328 0.44922 1.9922 1.3672 2.5781 c1.875 1.2109 1.6602 0.97656 3.9063 1.6406 c2.4219 0.70313 4.6094 2.207 6.1133 4.1406 c0.87891 1.1328 1.3281 2.5977 1.3281 4.375 c0 2.6367 -0.9375 4.8828 -2.8125 6.7578 s-4.1211 2.8125 -6.7383 2.8125 c-2.6367 0 -4.8828 -0.9375 -6.7578 -2.8125 s-2.8125 -4.1211 -2.8125 -6.7578 l6.3672 0 c0 1.7578 1.4258 3.1836 3.1836 3.1836 z" />
        </g>
      </g>
    </svg>
  );
}

const navigation = [
  { name: "Documentation", href: "/docs" },
  { name: "Pricing", href: "/pricing" },
];
const footerNavigation = {
  sections: {
    developer: [
      { name: "Documentation", href: "/docs" },
      { name: "Github", href: "/docs/guides" },
    ],
    general: [
      { name: "Pricing", href: "/pricing" },
      { name: "Documentation", href: "/docs" },
    ],
    legal: [
      { name: "Terms & Conditions", href: "/legal/terms" },
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Cookie Policy", href: "/legal/cookies" },
    ],
  },

  social: [
    {
      type: "github",
      href: "https://github.com/kfsoftware",
    },
    {
      type: "linkedin",
      href: "https://www.linkedin.com/company/kung-fu-software",
    },
  ],
};
const legal = {
  companyName: config.companyName,
};
const routes = {
  documentation: "/docs",
  apiReference: "",
};
function Redirect({ to }: { to: string }) {
  const router = useRouter();
  router.push(to);
  return null;
}
let redirectUri = "";
if (typeof window !== "undefined") {
  redirectUri = `${location.origin}/dashboard`;
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <ErrorProvider
        release={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA as string}
        dsn={process.env.NEXT_PUBLIC_SENTRY_DSN as string}
        environment={process.env.NEXT_PUBLIC_VERCEL_ENV as string}
      >
        <ConfigProvider
          redirect={({ to }) => {
            return <Redirect to={to} />;
          }}
          link={({ href, children, className = "", ...rest }) => (
            <Link href={href}>
              <a className={className}>{children}</a>
            </Link>
          )}
          logo={Logo}
          logoWithText={Logo}
          logoOnWhite={LogoOnWhite}
          footerNavigation={footerNavigation}
          headerLinks={navigation}
          legal={legal}
          name={config.name}
          routes={routes}
        >
          <AuthProvider
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
            redirectUri={redirectUri}
          >
            <GeneralProvider>
              <AuthorizedApolloProvider
                url={process.env.NEXT_PUBLIC_API_URL as string}
              >
                <TenantProvider>
                  <BillingProvider
                    stripePk={process.env.NEXT_PUBLIC_STRIPE_PK as string}
                  >
                    <Component {...pageProps} />
                  </BillingProvider>
                </TenantProvider>
              </AuthorizedApolloProvider>
            </GeneralProvider>
          </AuthProvider>
        </ConfigProvider>
      </ErrorProvider>
    </HelmetProvider>
  );
}
export default MyApp;
