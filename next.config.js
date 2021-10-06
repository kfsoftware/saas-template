/** @type {import('next').NextConfig} */
const minimatch = require("minimatch");
const path = require("path");
const withSyntaxHighlighting = require("./remark/withSyntaxHighlighting");
const withProse = require("./remark/withProse");
const { withNextLinks } = require("./remark/withNextLinks");
const { withTableOfContents } = require("./remark/withTableOfContents");
const withSmartQuotes = require("@silvenon/remark-smartypants");

const { createLoader } = require("simple-functional-loader");
const withTM = require("next-transpile-modules")([
  "@kfsoftware/analytics",
  "@kfsoftware/app",
  "@kfsoftware/auth",
  "@kfsoftware/legal",
  "@kfsoftware/billing",
  "@kfsoftware/forms",
  "@kfsoftware/common",
  "@kfsoftware/common-pages",
  "@kfsoftware/config",
  "@kfsoftware/docs",
  "@kfsoftware/error",
  "@kfsoftware/landing",
  "@kfsoftware/table",
  "@kfsoftware/tenant",
]); // pass the modules you would like to see transpiled
const config = {
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
  experimental: {
    modern: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    const mdx = [
      options.defaultLoaders.babel,
      {
        loader: "@mdx-js/loader",
        options: {
          remarkPlugins: [
            withProse,
            withTableOfContents,
            withSyntaxHighlighting,
            withNextLinks,
            withSmartQuotes,
          ],
        },
      },
    ];

    config.module.rules.push({
      test: /\.mdx$/,
      oneOf: [
        {
          resourceQuery: /preview/,
          use: [
            ...mdx,
            createLoader(function (src) {
              if (src.includes("<!--more-->")) {
                const [preview] = src.split("<!--more-->");
                return this.callback(null, preview);
              }

              const [preview] = src.split("<!--/excerpt-->");
              return this.callback(null, preview.replace("<!--excerpt-->", ""));
            }),
          ],
        },
        {
          resourceQuery: /rss/,
          use: mdx,
        },
        {
          use: [
            ...mdx,
            createLoader(function (src) {
              const resourcePath = path.relative(__dirname, this.resourcePath);
              const glob = "pages/docs/**/*";
              let content = src.replace(
                /{{API_URL}}/g,
                "http://localhost:3000/api/graphql"
              );
              if (minimatch(resourcePath, glob)) {
                content = [
                  'import DocLayout from "../../components/DocLayout"',
                  'export { getStaticProps } from "../../utils/getStaticProps"',
                  content,
                  "export default (props) => <DocLayout meta={meta} {...props} />",
                ].join("\n");
              }
              if (content.includes("<!--more-->")) {
                return this.callback(
                  null,
                  content.split("<!--more-->").join("\n")
                );
              }

              return this.callback(
                null,
                content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, "")
              );
            }),
          ],
        },
      ],
    });

    return config;
  },
};
module.exports = withTM(config);
