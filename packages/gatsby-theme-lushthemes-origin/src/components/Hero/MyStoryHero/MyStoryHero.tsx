/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';
import Img, { FluidObject } from 'gatsby-image';

import { Row } from '../../ui';

interface MyStoryHeroProps {
  children: ReactNode;
  className?: string;
  fluidImage: FluidObject | FluidObject[];
  sx?: any; // <- any sx is converted to a `className` prop AT the component, thus cannot be passed through to the underlying component. Instead we pass the `className`. (https://github.com/system-ui/theme-ui/issues/396)
}

// TODO: Add IMAGE ALT prop
const MyStoryHero = ({ children, className, fluidImage }: MyStoryHeroProps) => {
  return (
    <Row
      align={[null, null, 'center']}
      className={className}
      direction={['column', 'column', 'row']}
      element='section'
      sx={{ backgroundColor: 'silver', py: [100, 100, 120] }}
      withContainer={true}>
      <div sx={{ flex: 1.5, pr: [null, null, 9], pb: [5, 5, null] }}>
        {children}
      </div>
      <div sx={{ flex: 1, boxShadow: 2 }}>
        <Img fluid={fluidImage} />
      </div>
    </Row>
  );
};

export default MyStoryHero;
