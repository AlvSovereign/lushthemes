export default {
  name: 'storyFooter',
  type: 'object',
  title: 'Story Footer Section',
  fields: [
    {
      name: 'title',
      required: true,
      title: 'Footer title',
      type: 'string',
    },
    {
      name: 'subtitle',
      required: true,
      title: 'Footer subtitle',
      type: 'string',
    },
    {
      name: 'socialLinks',
      required: true,
      title: 'Social Like',
      type: 'array',
      of: [{ type: 'socialLink' }],
    },
    {
      name: 'contactTitle',
      required: true,
      title: 'Contact title',
      type: 'string',
    },
    {
      name: 'contact',
      required: true,
      title: 'Contact details',
      type: 'array',
      of: [{ type: 'contactLink' }],
    },
    {
      name: 'addressTitle',
      required: true,
      title: 'Address title',
      type: 'string',
    },
    {
      name: 'address',
      required: true,
      title: 'Address details',
      type: 'array',
      of: [{ type: 'address' }],
    },
  ],
};
