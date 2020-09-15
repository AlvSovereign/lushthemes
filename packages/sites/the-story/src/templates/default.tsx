import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ContentBlock from '../components/ContentBlock';
import SEO from '../components/SEO/Seo';
import {
  HeaderContainer,
  HeaderDefault,
  Layout,
  MenuModal,
} from 'gatsby-theme-lushthemes-origin';

export interface PageData {
  id: string;
  slug: string;
  title: string;
}

interface DefaultProps {
  pageContext: any;
}

const Default = ({ pageContext }: DefaultProps) => {
  const pageData = pageContext.data._rawModule;
  const data = useStaticQuery(graphql`
    query DefaultTemplateQuery {
      allSanityNavigation {
        edges {
          node {
            _rawPages(resolveReferences: { maxDepth: 1 })
          }
        }
      }
      allSanitySiteMetadata {
        edges {
          node {
            openGraphDescription
            openGraphImage {
              asset {
                url
              }
            }
            openGraphLocale
            openGraphTitle
            openGraphType
            openGraphUrl
            seoImage {
              asset {
                url
              }
            }
            seoTitle
            seoDescription
            twitterDescription
            twitterImage {
              asset {
                url
              }
            }
            twitterUsername
          }
        }
      }
    }
  `);
  const pages = data.allSanityNavigation.edges[0].node._rawPages;
  const siteMetadata = data.allSanitySiteMetadata.edges[0].node;
  const navData = pages.map(({ _id, slug, title }) => ({
    _id,
    slug: slug.current,
    title,
  }));

  return (
    <Layout>
      <SEO metadata={siteMetadata} />
      <HeaderContainer
        header={<HeaderDefault navData={navData} />}
        position='sticky'
        responsiveMenu={<MenuModal navData={navData} />}
      />
      <ContentBlock blocks={pageData} />
    </Layout>
  );
};

export default Default;
