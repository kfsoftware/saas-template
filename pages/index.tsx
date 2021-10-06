import imgUrl from "../images/demo.png";
import React from "react";
import { useAuth } from "@kfsoftware/auth";
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import {
  Footer,
  Header,
  FeatureWithScreenshot,
  FeatureGrid,
} from "@kfsoftware/landing";
import { useConfig } from "@kfsoftware/config";
import Head from "next/head";

const features = [
  {
    name: "Automatic alerts",
    description:
      "When your services are not available or there's an upcoming problem, we will try to contact your team on every possible channel",
    icon: CloudUploadIcon,
  },
  {
    name: "SSL Certificates",
    description:
      "SSL Certificates are monitored and alerts are sent when they are about to expire",
    icon: LockClosedIcon,
  },
  {
    name: "Integrations",
    description:
      "We integrate with services such as Slack and we're continually integrating with the products that you use",
    icon: RefreshIcon,
  },
  {
    name: "Powerful API",
    description: "Integrate with our API to manage your services dynamically",
    icon: CogIcon,
  },
];
export default function Landing() {
  const { loginWithRedirect } = useAuth();
  const config = useConfig();
  return (
    <>
      <Head>
        <title>{config.name}</title>
      </Head>
      <div className="min-h-screen">
        <div className="relative overflow-hidden">
          <Header />
          <main>
            <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <span className="block">Improve your</span>
                        <span className="block text-indigo-400">
                          bounce rate
                        </span>
                      </h1>
                      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Do you want to improve your bounce rate? We offer an API
                        to get real time data based on your emails
                      </p>
                      <div className="mt-10 sm:mt-12">
                        <div className="sm:max-w-xl sm:mx-auto lg:mx-0">
                          <div className="sm:flex">
                            <div className="mt-3 sm:mt-0">
                              <button
                                onClick={loginWithRedirect}
                                className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                              >
                                Start now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                      {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                      <img
                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <FeatureWithScreenshot
                claim={"Simple"}
                title={"Real time status updates"}
                description={`
We will monitor your services and alert you when they are
failing. Optionally, we save the response times in a
database and show you the slowest services and the patterns
to help you improve.
            `}
                img={"/demo.png"}
                imgAlt="Demo"
              />
              {/* Feature section with grid */}
              <FeatureGrid features={features} />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
