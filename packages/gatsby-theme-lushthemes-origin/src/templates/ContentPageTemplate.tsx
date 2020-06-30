import React from 'react';
import { graphql } from 'gatsby';
import ContentPage from '../components/ContentPage';

// export const query = graphql`
//   query($pageId: String!) {
//     contentPage(id: { eq: $pageId }) {
//       title
//       body
//     }
//   }
// `;

const ContentPageTemplate = ({ data }) => {
  return <ContentPage page={null} />;
};

export default ContentPageTemplate;
