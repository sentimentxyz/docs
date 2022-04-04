/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Core Concepts',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'core-concepts/overview',
        'core-concepts/account',
        'core-concepts/borrowing',
        'core-concepts/controller',
        'core-concepts/lending',
      ],
    },
    {
      type: 'category',
      label: 'The Protocol',
      link: {
        type: 'generated-index',
        title: 'The Protocol',
        description:
          "An in depth documentation about the Sentiment Credit Protocol",
        keywords: ['protocol'],
      },
      collapsed: false,
      items: [
        'protocol/ArchitectureDiagram',
        {
          type: 'category',
          label: 'AccountManagement',
          link: {
            type: 'doc',
            id: 'protocol/AccountManagement',
           },
          items: [
            'protocol/MarginManager',
          ],
        },
          'protocol/AssetConfiguration',
            {
              type: 'category',
                  label: 'Ltoken Contract',
                  link: {
                    type: 'doc',
                    id: 'protocol/LtokenContract'
                  },
                  items: [
                    'protocol/Tokenization',
                  ],
                },
                'protocol/BorrowFlow',
                'protocol/Interaction',
                'protocol/InterestRate',
                'protocol/Risk',
              ],
            },
          {
            type: 'category',
                label: 'Miscellaneous',
                link: {
                  type: 'generated-index',
                },
                items: [
                  'misc/useCases',
                  'misc/whitepaper',
                ],
          },
        ],
};
module.exports = sidebars;
