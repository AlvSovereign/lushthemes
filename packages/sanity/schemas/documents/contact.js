export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    {
      name: 'name',
      required: true,
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
  ],
};
