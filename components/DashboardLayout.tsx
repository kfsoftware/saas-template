import { CogIcon, DocumentTextIcon } from "@heroicons/react/outline";
import { DashboardLayout } from "@kfsoftware/app";
import { useAuth } from "@kfsoftware/auth";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const navigation = [
  {
    name: "TODOs",
    href: "/dashboard",
    isActive: (href: string, current: string) => href === current,
    icon: DocumentTextIcon,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    isActive: (href: string, current: string) => current.startsWith(href),
    icon: CogIcon,
  },
];
interface DashboardLayoutProps {
  children: JSX.Element;
}
export default function Layout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const { logout } = useAuth();
  const userNavigation = [
    {
      name: "Sign out",
      href: "#",
      onClick: () =>
        logout({
          returnTo: location.origin,
        }),
    },
  ];
  const navigationWithCurrent = useMemo(() => {
    return navigation.map((link) => ({
      ...link,
      current: link.isActive(link.href, router.asPath),
    }));
  }, [router]);
  return (
    <DashboardLayout
      navigation={navigationWithCurrent}
      headerNavigation={userNavigation}
    >
      {children}
    </DashboardLayout>
  );
}
