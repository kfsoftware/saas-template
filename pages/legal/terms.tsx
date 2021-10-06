import { useConfig } from "@kfsoftware/config";
import { TermsAndConditions } from "@kfsoftware/legal";
import { GetServerSideProps } from "next";
import Head from "next/head";
interface TermsProps {
  website: string;
}
export default function Terms({ website }: TermsProps) {
  const config = useConfig();
  return (
    <>
      <Head>
        <title>Terms - {config.name}</title>
      </Head>
      <TermsAndConditions
        companyName={config.legal.companyName}
        websiteName={config.name}
        websiteUrl={website}
      />
      ;
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const proto =
    context.req.headers["x-forwarded-proto"] ||
    (context.req.connection as any).encrypted
      ? "https"
      : "http";
  const website = `${proto}://${context.req.headers.host}`;
  return {
    props: {
      website,
    },
  };
};
