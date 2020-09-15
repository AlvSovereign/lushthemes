export default {
  name: 'myStoryHero',
  type: 'object',
  title: 'My Story Hero',
  fields: [
    {
      name: 'title',
      required: true,
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      required: true,
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'content',
      required: true,
      title: 'Content',
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
