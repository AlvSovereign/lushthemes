exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            _rawBody(resolveReferences: { maxDepth: 3 })
            id
            slug {
              current
            }
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    throw result.errors;
  }

  const { createPage } = actions;
  const pageData = result.data.allSanityPage.edges || [];

  createPages(pageData, createPage);
};

const createPages = (pageData, createPage) => {
  pageData.forEach((edge) => {
    const path = `${edge.node.slug.current}`;
    const homePage = path === '/';

    createPage({
      path,
      component: require.resolve(
        `./src/templates/${homePage ? 'index' : path}.tsx`
      ),
      context: {
        data: edge.node,
      },
    });
  });
};
