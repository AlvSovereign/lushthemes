import React from 'react';
import { animated } from 'react-spring';
import { Trail } from 'react-spring/renderprops';

import { Row, Typography } from '../../ui';
import styles from './MenuModal.module.css';

interface MenuModalProps {
  navData: any[];
  [key: string]: any;
}

const MenuModal = ({
  key,
  navData,
  props: transitionProps,
}: MenuModalProps) => (
  <animated.div className={styles.container} key={key} style={transitionProps}>
    <Row
      align='end'
      className={styles.modalLinksContainer}
      direction='column'
      element='ul'
      justify='center'>
      <Trail
        delay={300}
        from={{ opacity: 0 }}
        keys={(item) => item.slug}
        to={{ opacity: 1 }}
        items={navData}>
        {(item) => (props) => (
          <animated.li className={styles.modalLink} style={props}>
            <Typography element='a' href={item.slug} variant='h4'>
              {item.title}
            </Typography>
          </animated.li>
        )}
      </Trail>
    </Row>
  </animated.div>
);

export { MenuModal };
