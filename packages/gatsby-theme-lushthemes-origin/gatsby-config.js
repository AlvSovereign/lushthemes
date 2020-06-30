const withDefaults = require('./utils/default-options.js');

module.exports = (options) => {
  const { contentPath, useExternalMDX } = withDefaults(options);

  return {
    plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      !useExternalMDX && {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./src/components/layout.tsx'),
          },
        },
      },
      'gatsby-plugin-theme-ui',
    ].filter(Boolean),
  };
};
