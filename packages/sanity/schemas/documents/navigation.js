import { GrNavigate } from 'react-icons/gr';

export default {
  icon: GrNavigate,
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'page' } }],
    },
  ],
};
