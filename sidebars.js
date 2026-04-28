const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'setup',
      label: 'Setup & Installation',
    },
    {
      type: 'category',
      label: 'App Sections',
      collapsible: false,
      items: [
        'advanced',
        'trust-center',
        'widgets',
        'settings',
        'billing',
      ],
    },
  ],
};

export default sidebars;
