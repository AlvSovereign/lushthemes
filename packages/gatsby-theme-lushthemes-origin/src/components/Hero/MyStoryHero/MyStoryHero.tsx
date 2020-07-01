/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';
import Img, { FluidObject } from 'gatsby-image';

import { Row, Typography } from '../../ui';

interface MyStoryHeroProps {
  children: ReactNode;
  fluidImage: FluidObject | FluidObject[];
}

const MyStoryHero = ({ children, fluidImage }: MyStoryHeroProps) => {
  return (
    <Row
      align={[null, null, 'center']}
      direction={['column', 'column', 'row']}
      element='section'
      sx={{ background: 'silver', py: 5 }}
      withContainer={true}>
      <div sx={{ flex: 1, pr: [null, null, 9], pb: [5, 5, null] }}>
        {children}
      </div>
      <div sx={{ flex: 1.25, boxShadow: [2] }}>
        <Img fluid={fluidImage} />
      </div>
    </Row>
  );
};

export default MyStoryHero;
