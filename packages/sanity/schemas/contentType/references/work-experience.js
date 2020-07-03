export default {
  name: 'workExperience',
  type: 'object',
  title: 'Work Experience',
  fields: [
    {
      name: 'name',
      required: true,
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'duration',
      required: true,

      title: 'Duration',
      type: 'string',
    },
    {
      name: 'position',
      required: true,

      title: 'Position',
      type: 'string',
    },
    {
      name: 'role',
      required: true,

      title: 'Role',
      type: 'text',
    },
    {
      name: 'url',
      required: true,

      title: 'Website',
      type: 'url',
    },
    {
      name: 'link',
      required: true,

      title: 'Link text',
      type: 'string',
    },
  ],
};
