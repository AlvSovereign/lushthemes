export default {
  name: 'homeHero',
  type: 'object',
  title: 'Home Hero',
  fields: [
    {
      name: 'title',
      required: true,
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      required: true,
      title: 'Content',
      type: 'text',
    },
    {
      name: 'endText',
      required: true,
      title: 'Ending content',
      type: 'text',
    },
    {
      name: 'cta',
      required: true,
      title: 'CTA text',
      type: 'string',
    },
    {
      name: 'image',
      required: true,
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
