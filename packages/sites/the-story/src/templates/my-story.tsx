/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import ContentBlock from '../components/ContentBlock';

interface IndexProps {
  pageContext: any;
}

const MyStory = ({ pageContext }: IndexProps) => {
  console.log('pageContext: ', pageContext);
  const pageData = pageContext.data._rawBody;
  return <ContentBlock blocks={pageData} />;
};

export default MyStory;
