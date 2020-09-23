import { FaRegLightbulb } from 'react-icons/fa';

export default {
  icon: FaRegLightbulb,
  name: 'feature',
  title: 'Features',
  type: 'document',
  fields: [
    {
      name: 'title',
      required: true,
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'text',
      required: true,
      title: 'Text',
      type: 'string',
    },
    {
      name: 'cta',
      title: 'CTA text',
      type: 'string',
    },
  ],
};
