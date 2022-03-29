// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sentiment',
  tagline: 'The Universal Credit Protocol',
  url: 'https://sentiment.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'sentimentxyz',
  projectName: 'docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sentimentxyz/docs',
        },
        blog: false
      }),
    ],
  ],

  themeConfig: {
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      navbar: {
        title: 'Sentiment',
        logo: {
          alt: 'Sentiment',
          src: 'logo.png',
        },
        items: [
          {
            label: 'Twitter',
            href: 'https://twitter.com/sentimentxyz',
            position: 'right'
          },
          {
            label: 'GitHub',
            href: 'https://github.com/sentimentxyz',
            position: 'right',
          },
        ]
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Sentiment.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
