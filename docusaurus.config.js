// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Baileys",
  tagline:
    "Baileys does not require Selenium or any other browser to be interface with WhatsApp Web, it does so directly using a WebSocket.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://whiskeysockets.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "WhiskeySockets", // Usually your GitHub org/user name.
  projectName: "Baileys", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/WhiskeySockets/whiskeysockets.github.io/tree/main/",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/WhiskeySockets/whiskeysockets.github.io/tree/main/",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        theme: {
          customCss: require.resolve("./src/scss/custom.scss"),
        },
        gtag: {
          trackingID: "G-WBY63HR4VS",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: ["docusaurus-plugin-sass"],

  /** @type any} */
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en"],
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.png",
      metadata: [
        {
          name: "keywords",
          content:
            "baileys, whatsapp, js-whatsapp, whatsapp-api, whatsapp-web, whatsapp-chat, whatsapp-group, automation, multi-device, bot",
        },
      ],
      announcementBar: {
        id: "support_us", // Increment on change
        content:
          '⭐️ If you like Baileys, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/WhiskeySockets/Baileys">GitHub</a>',
      },
      navbar: {
        title: "Baileys",
        logo: {
          alt: "WhiskeySockets Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://discord.gg/WeJM5FP9GG",
            position: "right",
            className: "header-discord-link",
            "aria-label": "Discord Channel",
            title: "Discord Channel",
          },
          {
            href: "https://github.com/WhiskeySockets/Baileys",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub Repository",
            title: "GitHub Repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/WhiskeySockets/Baileys",
              },
              {
                label: "Discord",
                href: "https://discord.gg/WeJM5FP9GG",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
