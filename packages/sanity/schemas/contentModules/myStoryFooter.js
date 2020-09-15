export default {
  name: 'myStoryFooter',
  type: 'object',
  title: 'Story Footer',
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
      name: 'socials',
      required: true,
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'socialLinks' }] }],
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
      type: 'reference',
      to: [{ type: 'contact' }],
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
      type: 'reference',
      to: [{ type: 'address' }],
    },
  ],
};
