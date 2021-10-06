import { useConfig } from "@kfsoftware/config";
import { Footer, Header } from "@kfsoftware/landing";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { createDocList } from "../utils/getAllDocs";
import { ContentsLayout, SidebarLayout } from "@kfsoftware/docs";
const docList = createDocList(
  require.context("../pages/docs/?preview", false, /\.mdx$/),
  "docs"
);

const documentationNav = {
  "Getting started": [
    docList["getting-started"],
    docList["api-access-key"],
  ],
  "API Reference": [
    docList["graphql-api"],
    // docList["email-verification"],
  ],
};

function Title({ suffix, children }: any) {
  let title = children + (suffix ? ` - ${suffix}` : "");

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="og:title" property="og:title" content={title} />
    </Head>
  );
}
export default function DocumentationLayout(props: any) {
  const router = useRouter();
  const { children, ...rest } = props;
  let [navIsOpen, setNavIsOpen] = useState(false);
  const config = useConfig();
  return (
    <>
      <Title suffix={router.pathname === "/" ? undefined : config.name}>
        {props.meta.metaTitle || props.meta.title}
      </Title>
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://tailwindcss.com/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg"
        />
      </Head>
      <div className="min-h-screen">
        <div className="pb-5 bg-gray-900">
          <Header />
        </div>
        <SidebarLayout
          nav={documentationNav}
          navIsOpen={navIsOpen}
          setNavIsOpen={setNavIsOpen}
          pathname={router.pathname}
          {...rest}
        >
          <ContentsLayout pathname={router.pathname} {...rest}>
            {children}
          </ContentsLayout>
        </SidebarLayout>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
}
