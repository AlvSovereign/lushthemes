/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import ContentBlock from '../components/ContentBlock';
import HeaderContainer from 'gatsby-theme-lushthemes-origin/src/components/Headers/HeaderContainer';
import HeaderDefault from 'gatsby-theme-lushthemes-origin/src/components/Headers/HeaderDefault/HeaderDefault';
import HeaderMenu from 'gatsby-theme-lushthemes-origin/src/components/Headers/HeaderMenu';

interface IndexProps {
  pageContext: any;
}

const MyStory = ({ pageContext }: IndexProps) => {
  const pageData = pageContext.data._rawBody;

  return (
    <Fragment>
      <HeaderContainer position='relative' sx={{ height: '60px' }}>
        <HeaderDefault />
      </HeaderContainer>
      <ContentBlock blocks={pageData} />
    </Fragment>
  );
};

export default MyStory;
