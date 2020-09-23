import { BiNetworkChart } from 'react-icons/bi';

export default {
  icon: BiNetworkChart,
  name: 'socialLinks',
  type: 'document',
  title: 'Social Links',
  fields: [
    {
      name: 'name',
      required: true,
      title: 'Name',
      type: 'string',
    },
    {
      name: 'url',
      required: true,
      title: 'Social url',
      type: 'url',
    },
  ],
};
