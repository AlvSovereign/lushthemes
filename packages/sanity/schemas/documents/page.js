import { GrDocument } from 'react-icons/gr';

export default {
  icon: GrDocument,
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      required: true,
      min: 70,
      max: 155,
    },
    // {
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // },
    {
      name: 'module',
      title: 'Modules',
      type: 'array',
      of: [
        {
          type: 'homeHero',
        },
        {
          type: 'myStoryHero',
        },
        //features
        { type: 'featuresModule' },
        {
          type: 'workExperienceModule',
        },
        // media
        {
          type: 'simpleMedia',
        },
        {
          type: 'awardsModule',
        },
        {
          type: 'myStoryFooter',
        },
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
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
