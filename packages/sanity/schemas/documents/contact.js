import { MdContactMail } from 'react-icons/md';

export default {
  icon: MdContactMail,
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
