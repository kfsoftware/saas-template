import Head from "next/head";
import { PricingPage } from "@kfsoftware/billing";
import { GetServerSideProps, GetStaticProps, NextPageContext } from "next";
import React from "react";
import { GetPlansDocument, GetPlansQuery, Plan } from "../operations";
import client from "../apollo-client";
import { useConfig } from "@kfsoftware/config";

interface PricingProps {
  plans: Plan[];
}
export default function Pricing({ plans }: PricingProps) {
  const config = useConfig();
  return (
    <>
      <Head>
        <title>Pricing - {config.name}</title>
      </Head>
      <PricingPage plans={plans} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await client.query<GetPlansQuery>({
    query: GetPlansDocument,
  });
  return {
    props: {
      plans: data?.plans || [],
    },
  };
};
