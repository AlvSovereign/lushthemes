export default {
  name: 'workExperienceModule',
  type: 'object',
  title: 'Work Experience',
  fields: [
    {
      name: 'title',
      required: true,

      title: 'Section title',
      type: 'string',
    },
    {
      name: 'downloadUrl',
      required: true,

      title: 'Upload resume/file',
      type: 'file',
    },
    {
      name: 'downloadText',
      required: true,

      title: 'Download text',
      type: 'string',
    },
    {
      name: 'introText',
      required: true,

      title: 'Intro text',
      type: 'text',
    },
    {
      name: 'listExperience',
      required: true,

      title: 'Work Experience List',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'workExperience' }] }],
    },
  ],
};
