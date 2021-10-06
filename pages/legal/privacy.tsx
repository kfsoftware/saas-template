import { useConfig } from "@kfsoftware/config";
import { PrivacyPolicy } from "@kfsoftware/legal";
import { GetServerSideProps } from "next";
import Head from "next/head";
interface PrivacyProps {
  website: string;
}
export default function Privacy({ website }: PrivacyProps) {
  const config = useConfig();
  return (
    <>
      <Head>
        <title>{config.name}</title>
      </Head>
      <PrivacyPolicy companyName={config.legal.companyName} website={website} />
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
