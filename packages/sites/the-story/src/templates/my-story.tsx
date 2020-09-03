/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ContentBlock from '../components/ContentBlock';
import HeaderContainer from 'gatsby-theme-lushthemes-origin/src/components/Headers/HeaderContainer/HeaderContainer';
import HeaderDefault from 'gatsby-theme-lushthemes-origin/src/components/Headers/HeaderDefault/HeaderDefault';
import MenuModal from 'gatsby-theme-lushthemes-origin/src/components/Headers/MenuModal/MenuModal';

export interface PageData {
  id: string;
  slug: string;
  title: string;
}

interface IndexProps {
  pageContext: any;
}

const MyStory = ({ pageContext }: IndexProps) => {
  const pageData = pageContext.data._rawBody;
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allSanityNavigation {
        edges {
          node {
            _rawPages(resolveReferences: { maxDepth: 1 })
          }
        }
      }
    }
  `);
  const pages = data.allSanityNavigation.edges[0].node._rawPages;
  const navData = pages.map(({ _id, slug, title }) => ({
    _id,
    slug: slug.current,
    title,
  }));

  return (
    <Fragment>
      <HeaderContainer
        header={<HeaderDefault navData={navData} />}
        position='fixed'
        responsiveMenu={<MenuModal navData={navData} />}
        sx={{ height: '60px' }}
      />
      <ContentBlock blocks={pageData} />
    </Fragment>
  );
};

export default MyStory;
