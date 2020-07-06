export default {
  name: 'address',
  type: 'object',
  title: 'Address',
  fields: [
    {
      name: 'address1',
      required: true,
      title: 'Address line 1',
      type: 'string',
    },
    {
      name: 'address2',
      required: true,
      title: 'Address line 2',
      type: 'string',
    },
    {
      name: 'address3',
      title: 'Address line 3',
      type: 'string',
    },
    {
      name: 'city',
      required: true,
      title: 'City',
      type: 'string',
    },
    {
      name: 'district',
      required: true,
      title: 'District',
      type: 'string',
    },
    {
      name: 'postcode',
      required: true,
      title: 'Zip/Postal dode',
      type: 'string',
    },
  ],
};
