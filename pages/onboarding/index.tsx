import { CreateTenant } from "@kfsoftware/app";
import { useAuth } from "@kfsoftware/auth";
import { useGeneral, useTenant } from "@kfsoftware/common";
import { useConfig } from "@kfsoftware/config";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Onboarding() {
  const router = useRouter();
  const { refetch } = useTenant();
  const config = useConfig();
  const { setTenant } = useGeneral();
  const { user, isLoading } = useAuth();
  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/");
    }
  }, [user, isLoading, router]);
  return (
    <>
      <Head>
        <title>Onboarding - {config.name}</title>
      </Head>
      <CreateTenant
        onComplete={async (tenant) => {
          setTenant({
            id: tenant.id,
            name: tenant.name,
            subscription: null,
            users: [],
            slug: tenant.slug,
          });
          await refetch();
          router.push("/dashboard");
        }}
      />
    </>
  );
}
