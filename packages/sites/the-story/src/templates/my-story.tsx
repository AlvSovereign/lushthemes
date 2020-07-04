/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import ContentBlock from '../components/ContentBlock';

interface IndexProps {
  pageContext: any;
}

const MyStory = ({ pageContext }: IndexProps) => {
  const pageData = pageContext.data._rawBody;

  return (
    <Fragment>
      <ContentBlock blocks={pageData} />
    </Fragment>
  );
};

export default MyStory;
