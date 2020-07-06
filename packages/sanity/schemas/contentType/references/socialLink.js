export default {
  name: 'socialLink',
  type: 'object',
  title: 'Social link',
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
