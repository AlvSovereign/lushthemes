export default {
  name: 'awardsModule',
  type: 'object',
  title: 'Awards',
  fields: [
    {
      name: 'title',
      required: true,
      title: 'Section title',
      type: 'string',
    },
    {
      name: 'listTitle',
      required: true,
      title: 'List title',
      type: 'string',
    },
    {
      name: 'awardsList',
      required: true,
      title: 'Awards list',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'awards' }] }],
    },
  ],
};
