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
        <Typography color='white' element='h1' sx={{ mb: 5 }} variant='h1'>
          {title}
        </Typography>
        <Typography
          color='white'
          element='p'
          sx={{ mb: 5 }}
          variant='p'
          weight='light'>
          {text}
        </Typography>
        <Typography color='white' element='h4' sx={{ mb: 6 }} variant='h4'>
          {endText}
        </Typography>
        <Button
          label={cta}
          onClick={onCtaClick}
          sx={{ alignSelf: 'center' }}
          variant='primary'
        />
      </Row>
    </Row>
  );
};

export { HomeHero };
