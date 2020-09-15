export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'page' } }],
    },
  ],
};
