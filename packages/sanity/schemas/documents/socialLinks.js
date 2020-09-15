export default {
  name: 'socialLinks',
  type: 'document',
  title: 'Social Links',
  fields: [
    {
      name: 'name',
      required: true,
      title: 'Name',
      type: 'string',
    },
    {
      name: 'url',
      required: true,
      title: 'Social url',
      type: 'url',
    },
  ],
};
