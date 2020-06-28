/**@jsx jsx */
import { jsx } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './layout';

const ContentPage = ({ page }) => {
  return (
    <Layout>
      <h1>{page.title}</h1>
      <MDXRenderer>{page.body}</MDXRenderer>
    </Layout>
  );
};

export default ContentPage;
