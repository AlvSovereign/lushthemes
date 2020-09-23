export default {
  name: 'featuresModule',
  type: 'object',
  title: 'Features',
  fields: [
    {
      name: 'title',
      required: true,
      title: 'Section title',
      type: 'string',
    },
    {
      name: 'subtitle',
      required: true,
      title: 'Section subtitle',
      type: 'string',
    },
    {
      name: 'featureList',
      required: true,
      title: 'Feature list',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'feature' }] }],
    },
  ],
};
