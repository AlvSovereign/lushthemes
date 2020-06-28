const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const withDefaults = require('./utils/default-options');

exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  const { contentPath } = withDefaults(options);
  const dir = path.join(program.directory, contentPath);

  if (!fs.existsSync(dir)) {
    // TODO figure out the content path
    mkdirp.sync(dir);
  }
  // TODO get options with defaults
  // TODO if directory doesn't exost, create it
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type ContentPage implements Node @dontInfer {
      id: ID!
      title: String!
      path: String!
      body: String!
    }
  `);
};

exports.onCreateNode = ({ node, actions, getNode, createNodeId }, options) => {
  const { basePath } = withDefaults(options);
  const parent = getNode(node.parent);

  // only work on MDX filed that were loaded by this theme
  if (
    node.internal.type !== 'Mdx' ||
    parent.sourceInstanceName !== 'gatsby-theme-origin'
  ) {
    return;
  }

  // treat index.mdx link 'index.html'
  const pageName = parent.name !== 'index' ? parent.name : '';

  actions.createNode({
    id: createNodeId(`ContentPage-${node.id}`),
    title: node.frontmatter.title || parent.name,
    path: path.join('/', basePath, parent.relativeDirectory, pageName),
    parent: node.id,
    internal: {
      type: 'ContentPage',
      contentDigest: node.internal.contentDigest,
    },
  });
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    ContentPage: {
      body: {
        type: 'String!',
        resolve: (source, args, context, info) => {
          // Load resolver for the Mdx type
          const type = info.schema.getType('Mdx');
          const mdxFields = type.getFields();
          const resolver = mdxFields.body.resolve;

          const mdxNode = context.nodeModel.getNodeById({ id: source.parent });

          return resolver(mdxNode, args, context, { fieldName: 'body' });
        },
      },
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allContentPage {
        nodes {
          id
          path
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading content', result.errors);
  }

  const pages = result.data.allContentPage.nodes;

  pages.forEach((page) => {
    actions.createPage({
      path: page.path,
      component: require.resolve('./src/templates/ContentPageTemplate.js'),
      context: {
        pageId: page.id,
      },
    });
  });
};
