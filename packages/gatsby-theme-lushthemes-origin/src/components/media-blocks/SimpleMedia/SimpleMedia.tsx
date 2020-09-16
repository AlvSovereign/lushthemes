import React, { ReactNode } from 'react';

import { Row, Typography } from '../../ui';
import styles from './SimpleMedia.module.css';

interface SimpleMediaProps {
  caption?: string;
  children: ReactNode;
}

const SimpleMedia = ({ caption, children }: SimpleMediaProps) => (
  <Row
    align='center'
    className={styles.container}
    display='block'
    direction='column'
    element='section'
    withContainer={true}>
    <Row
      align='center'
      className={styles.videoContainer}
      direction='column'
      element='figure'
      justify='center'>
      {children}
      {caption && (
        <Row
          align='center'
          className={styles.captionContainer}
          direction='column'
          element='figcaption'
          justify='center'>
          <Typography color='black' element='p' type='italic' variant='p'>
            {caption}
          </Typography>
        </Row>
      )}
    </Row>
  </Row>
);

export { SimpleMedia };
