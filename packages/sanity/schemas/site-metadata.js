export default {
  name: 'siteMetadata',
  title: 'Site metadata',
  type: 'document',
  fields: [
    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'SEO description',
      type: 'string',
      required: true,
      min: 70,
      max: 155,
    },
    {
      name: 'seoImage',
      title: 'SEO image',
      type: 'image',
    },
    {
      name: 'openGraphTitle',
      title: 'OpenGraph title',
      type: 'string',
    },
    {
      name: 'openGraphUrl',
      title: 'OpenGraph url',
      type: 'url',
    },
    {
      name: 'openGraphImage',
      title: 'OpenGraph image',
      type: 'image',
    },
    {
      name: 'openGraphLocale',
      title: 'OpenGraph locale',
      type: 'string',
    },
    {
      name: 'openGraphType',
      title: 'OpenGraph type',
      type: 'string',
    },
    {
      name: 'openGraphDescription',
      title: 'OpenGraph description',
      type: 'string',
    },
    {
      name: 'twitterUsername',
      title: 'Twitter username',
      type: 'string',
    },
    {
      name: 'twitterImage',
      title: 'Twitter image',
      type: 'image',
    },
    {
      name: 'twitterDescription',
      title: 'Twitter description',
      type: 'string',
    },
  ],
};
