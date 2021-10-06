import { CogIcon, DocumentTextIcon } from "@heroicons/react/outline";
import DashboardLayout from "./DashboardLayout";
import { AuthSettingsForm, useAuth } from "@kfsoftware/auth";
import { BillingForm, InvoiceTable } from "@kfsoftware/billing";
import { useGeneral } from "@kfsoftware/common";
import { useConfig } from "@kfsoftware/config";
import { APIKeys, TenantMembers, TenantSettingsForm } from "@kfsoftware/tenant";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { id: "general", name: "General", href: "/dashboard/settings" },
  { id: "billing", name: "Billing", href: "/dashboard/settings/billing" },
];
function BillingSettings() {
  return (
    <>
      <BillingForm />
      <div className="my-4">
        <div className="pb-5 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Invoices
          </h3>
        </div>
        <InvoiceTable onClickDetail={(inv) => console.log(inv)} />
      </div>
    </>
  );
}

function GeneralSettings() {
  const { current } = useGeneral();
  const { user } = useAuth();
  return (
    <>
      <AuthSettingsForm />
      <TenantSettingsForm />
    </>
  );
}

export default function Settings() {
  const router = useRouter();
  const currentTab = useMemo(() => {
    return tabs.find((tab) => tab.href === router.asPath);
  }, [router]);
  const config = useConfig();

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="px-4 sm:px-6 md:px-0">
          <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
        </div>
        <div className="px-4 sm:px-6 md:px-0">
          <div className="py-6">
            <div className="lg:hidden">
              <label htmlFor="selected-tab" className="sr-only">
                Select a tab
              </label>
              <select
                id="selected-tab"
                name="selected-tab"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                value={currentTab?.name}
                onChange={(e) => {
                  const tabSelected = tabs.find(
                    (tab) => tab.name === e.target.value
                  )!;
                  router.push(tabSelected?.href);
                }}
              >
                {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden lg:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  {tabs.map((tab) => {
                    const current = tab.href === router.asPath;
                    return (
                      <config.link
                        key={tab.name}
                        href={tab.href}
                        className={classNames(
                          current
                            ? "border-purple-500 text-purple-600"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                          "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        )}
                      >
                        {tab.name}
                      </config.link>
                    );
                  })}
                </nav>
              </div>
            </div>
            {currentTab?.id === "general" ? (
              <GeneralSettings />
            ) : currentTab?.id === "billing" ? (
              <BillingSettings />
            ) : (
              <p>Not Found</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
