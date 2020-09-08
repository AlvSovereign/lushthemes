/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ContentBlock from '../components/ContentBlock';
import HeaderContainer from 'gatsby-theme-lushthemes-origin/src/components/Headers/HeaderContainer/HeaderContainer';
import HeaderDefault from 'gatsby-theme-lushthemes-origin/src/components/Headers/HeaderDefault/HeaderDefault';
import MenuModal from 'gatsby-theme-lushthemes-origin/src/components/Headers/MenuModal/MenuModal';
import SEO from '../components/Seo/Seo';
import { Layout } from 'gatsby-theme-lushthemes-origin';

export interface PageData {
  id: string;
  slug: string;
  title: string;
}

interface DefaultProps {
  pageContext: any;
}

const Default = ({ pageContext }: DefaultProps) => {
  const pageData = pageContext.data._rawBody;
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
        position='fixed'
        responsiveMenu={<MenuModal navData={navData} />}
      />
      <ContentBlock blocks={pageData} />
    </Layout>
  );
};

export default Default;
