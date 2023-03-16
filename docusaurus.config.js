// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sentiment",
  tagline: "The Universal Credit Protocol",
  url: "https://sentiment.xyz",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.png",
  organizationName: "sentimentxyz",
  projectName: "docs",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    autoCollapseSidebarCategories: true,
    algolia: {
      apiKey: "ba302929473f01e65a7a9db29568ad9c",
      appId: "DXWXYS5HT9",
      indexName: "prod_index",
    },
    navbar: {
      logo: {
        alt: "Sentiment",
        srcDark: "logo_long.png",
        src: "logo_long_black.png",
      },
      items: [
        {
          label: "Twitter",
          href: "https://twitter.com/sentimentxyz",
          position: "right",
        },
        {
          label: "GitHub",
          href: "https://github.com/sentimentxyz",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Developers",
          items: [
            {
              label: "Whitepaper",
              href: "https://docs.sentiment.xyz/assets/files/whitepaper-6d79d366383af419382831913a0470a1.pdf",
            },
            {
              label: "GitHub",
              href: "https://github.com/sentimentxyz",
            },
            {
              label: "Feedback",
              to: "/",
            },
          ],
        },
        {
          title: "Ecosystem",
          items: [
            {
              label: "Website",
              href: "https://www.sentiment.xyz/",
            },
            {
              label: "App",
              href: "https://arbitrum.sentiment.xyz/borrow",
            },
            {
              label: "DeFiLlama",
              href: "https://defillama.com/protocol/sentiment",
            },
            {
              label: "Dune Analytics",
              href: "https://dune.com/ruvaag/sentiment-arb",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/sentimentxyz",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/sentimentxyz",
            },
            {
              label: "Blog",
              href: "https://blog.sentiment.xyz/",
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Sentiment.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["solidity"],
    },
  },
};

module.exports = config;
