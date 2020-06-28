/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

import { Row, Typography } from '../../ui';

interface MyStoryHeroProps {
  children?: ReactNode;
  heading?: string;
  subHeading?: string;
}

const MyStoryHero = ({ children, heading, subHeading }: MyStoryHeroProps) => {
  return (
    <Row element='section'>
      {heading && <Typography element='h2'>{heading}</Typography>}
      {subHeading && <h3>{subHeading}</h3>}
      {children && children}
    </Row>
  );
};

export default MyStoryHero;
