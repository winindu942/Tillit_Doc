import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'TILLIT AI Docs',
  tagline: 'Supply chain traceability for Shopify merchants',
  favicon: 'img/TillitLogo.png',

  future: { v4: true },

  url: 'https://winindu942.github.io',
  baseUrl: '/Tillit_Doc/',

  organizationName: 'winindu942',
  projectName: 'Tillit_Doc',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'ignore',
    },
  },

  i18n: { defaultLocale: 'en', locales: ['en'] },

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

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
    colorMode: { defaultMode: 'light', disableSwitch: false, respectPrefersColorScheme: false },
    navbar: {
      logo: { alt: 'TILLIT AI Logo', src: 'img/TillitLogo.png', href: 'https://tillit.world' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'In Progress',
        },
        {
          to: '/',
          label: 'Get Started',
          position: 'right',
          className: 'navbar-cta-btn',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction',    to: '/' },
            { label: 'Dashboard',       to: '/dashboard' },
            { label: 'Advanced',        to: '/advanced' },
            { label: 'Trust Center',    to: '/trust-center' },
            { label: 'Widgets',         to: '/widgets' },
            { label: 'Settings',        to: '/settings' },
            { label: 'Billing',         to: '/billing' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'tillit.world',    href: 'https://tillit.world' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tillit. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'bash',
    },
  }),
};

export default config;
