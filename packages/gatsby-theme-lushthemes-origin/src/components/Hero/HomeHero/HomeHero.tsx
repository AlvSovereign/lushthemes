/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import { Button, Row, Typography } from '../../ui';

interface HomeHeroProps {
  cta: string;
  endText: string;
  fluidImage: FluidObject | FluidObject[];
  onCtaClick: (arg?: any) => void;
  text: string;
  title: string;
}

const HomeHero = ({
  cta,
  endText,
  fluidImage,
  onCtaClick,
  text,
  title,
}: HomeHeroProps) => {
  console.log('fluidImage: ', fluidImage);
  return (
    <Row
      align='center'
      backgroundImage={fluidImage}
      direction='row'
      element='section'
      sx={{
        background: 'black',
        height: ['auto', 'auto', 900],
        py: [100, 100, 120],
      }}
      withContainer={true}>
      <Row direction='column' element='div' sx={{ flex: [1, 1, 0.5] }}>
        <Typography element='h1' sx={{ color: 'white', mb: 5 }} variant='h1'>
          {title}
        </Typography>
        <Typography element='p' sx={{ color: 'silver', mb: 5 }} variant='p'>
          {text}
        </Typography>
        <Typography element='h4' sx={{ color: 'white', mb: 6 }} variant='h4'>
          {endText}
        </Typography>
        <Button
          onClick={onCtaClick}
          sx={{ alignSelf: 'center' }}
          variant='primary'
          value={cta}
        />
      </Row>
    </Row>
  );
};

export default HomeHero;
