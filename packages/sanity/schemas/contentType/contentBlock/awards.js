export default {
  name: 'awardsSection',
  type: 'object',
  title: 'Awards Section',
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
      of: [{ type: 'awards' }],
    },
  ],
};
