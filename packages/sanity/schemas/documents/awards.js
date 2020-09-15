export default {
  name: 'awards',
  title: 'Awards',
  type: 'document',
  fields: [
    {
      name: 'award',
      required: true,
      title: 'Award title',
      type: 'string',
    },
    {
      name: 'awardedBy',
      required: true,
      title: 'Awarded by',
      type: 'string',
    },
    {
      name: 'date',
      required: true,
      title: 'Date',
      type: 'string',
    },
  ],
};
