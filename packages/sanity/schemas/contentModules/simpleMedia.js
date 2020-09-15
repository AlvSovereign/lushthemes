export default {
  name: 'simpleMedia',
  type: 'object',
  title: 'Simple Media Section',
  fields: [
    {
      name: 'media',
      title: 'Media',
      type: 'file',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'alt',
      title: 'Image alt',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
  ],
};
