import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'TILLIT AI Docs',
  tagline: 'Supply chain traceability for Shopify merchants',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://winindu942.github.io',
  baseUrl: '/Tillit_Doc/',

  organizationName: 'winindu942',
  projectName: 'Tillit_Doc',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themeConfig: ({
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: 'TILLIT AI',
      logo: { alt: 'TILLIT AI Logo', src: 'img/logo.svg' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://tillit.world',
          label: 'tillit.world',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Supply Chain Dashboard', to: '/dashboard' },
            { label: 'Billing & Subscription', to: '/billing' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'tillit.world', href: 'https://tillit.world' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tillit. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
