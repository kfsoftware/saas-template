import { useConfig } from "@kfsoftware/config";
import { CookiePolicy } from "@kfsoftware/legal";
import Head from "next/head";
export default function Cookies() {
  const config = useConfig();
  return (
    <>
      <Head>
        <title>Cokies - {config.name}</title>
      </Head>
      <CookiePolicy contactEmail="info@kfs.es" />
    </>
  );
}
