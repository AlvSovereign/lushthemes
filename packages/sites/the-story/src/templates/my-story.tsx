/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import ContentBlock from '../components/ContentBlock';
import StoryFooter from '../gatsby-theme-lushthemes-origin/components/ContentBlock/Footer/StoryFooter';

interface IndexProps {
  pageContext: any;
}

const MyStory = ({ pageContext }: IndexProps) => {
  const pageData = pageContext.data._rawBody;

  return (
    <Fragment>
      <ContentBlock blocks={pageData} />
      <StoryFooter />
    </Fragment>
  );
};

export default MyStory;
