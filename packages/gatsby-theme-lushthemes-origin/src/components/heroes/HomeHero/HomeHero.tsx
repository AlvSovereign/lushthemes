/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import { Button, Row, Typography } from '../../ui';
import { RightArrow } from '../../../assets/icons';
import styles from './HomeHero.module.css';

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
      className={styles.container}
      direction='row'
      element='section'
      withContainer={true}>
      <Row className={styles.contentContainer} direction='column' element='div'>
        <Typography
          className={styles.text}
          color='white'
          element='h1'
          variant='h1'
          weight='bold'>
          {title}
        </Typography>
        <Typography
          className={styles.text}
          color='white'
          element='p'
          variant='p'>
          {text}
        </Typography>
        <Typography
          className={styles.gutter}
          color='white'
          element='h4'
          variant='h4'
          weight='bold'>
          {endText}
        </Typography>
        <Button
          className={styles.cta}
          label={cta}
          onClick={onCtaClick}
          variant='primary'
        />
      </Row>
    </Row>
  );
};

export { HomeHero };
