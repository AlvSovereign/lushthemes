export default {
  name: 'myStoryHero',
  type: 'object',
  title: 'My Story Hero',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
