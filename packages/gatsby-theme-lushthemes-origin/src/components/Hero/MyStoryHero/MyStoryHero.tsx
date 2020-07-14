/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';
import Img, { FluidObject } from 'gatsby-image';

import { Button, Row, Typography } from '../../ui';

interface MyStoryHeroProps {
  className?: string;
  content: string;
  cta: string;
  fluidImage: FluidObject | FluidObject[];
  onCtaClick: () => void;
  subtitle: string;
  sx?: any; // <- any sx is converted to a `className` prop AT the component, thus cannot be passed through to the underlying component. Instead we pass the `className`. (https://github.com/system-ui/theme-ui/issues/396)
  title: string;
}

// TODO: Add IMAGE ALT prop
const MyStoryHero = ({
  className,
  content,
  cta,
  fluidImage,
  onCtaClick,
  subtitle,
  title,
}: MyStoryHeroProps) => {
  return (
    <Row
      align={[null, null, 'center']}
      className={className}
      direction={['column', 'column', 'row']}
      element='section'
      sx={{ backgroundColor: 'silver', py: [100, 100, 120] }}
      withContainer={true}>
      <div sx={{ flex: 1.5, pr: [null, null, 9], pb: [5, 5, null] }}>
        <Typography element='h1' variant='h1'>
          {title}
        </Typography>
        <Typography element='h3' sx={{ mb: 3 }} variant='h3'>
          {subtitle}
        </Typography>
        <Typography element='p' sx={{ mb: 5 }} variant='p'>
          {content}
        </Typography>
        <Button onClick={onCtaClick} variant='secondary' value={cta} />
      </div>
      <div sx={{ flex: 1, boxShadow: 2 }}>
        <Img fluid={fluidImage} />
      </div>
    </Row>
  );
};

export default MyStoryHero;
