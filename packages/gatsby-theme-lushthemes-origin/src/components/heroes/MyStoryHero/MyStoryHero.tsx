import React, { ReactNode } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import cx from 'classnames';

import { Button, Row, Typography } from '../../ui';
import styles from './MyStoryHero.module.css';

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
      className={cx(styles.container, className)}
      element='section'
      withContainer={true}>
      <div className={styles.contentContainer}>
        <Typography align='center' element='h1' variant='h1' weight='bold'>
          {title}
        </Typography>
        <Typography
          align='center'
          className={styles.subtitle}
          element='h3'
          variant='h3'
          weight='bold'>
          {subtitle}
        </Typography>
        <Typography className={styles.content} element='p' variant='p'>
          {content}
        </Typography>
        <Button
          className={styles.cta}
          label={cta}
          onClick={onCtaClick}
          variant='secondary'
        />
      </div>
      <div className={styles.imageContainer}>
        <Img fluid={fluidImage} />
      </div>
    </Row>
  );
};

export { MyStoryHero };
