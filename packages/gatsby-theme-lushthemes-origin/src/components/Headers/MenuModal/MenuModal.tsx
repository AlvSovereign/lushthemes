/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { animated, useTransition } from 'react-spring';
import { Trail } from 'react-spring/renderprops';
import { Row, Typography } from '../../ui';

interface MenuModalProps {
  navData: any[];
  [key: string]: any;
}

const MenuModal = ({
  key,
  navData,
  props: transitionProps,
}: MenuModalProps) => (
  <animated.div
    key={key}
    style={transitionProps}
    sx={{
      alignItems: 'center',
      backgroundColor: 'white',
      bottom: 0,
      display: 'flex',
      height: `calc(100vh - 60px)`,
      justifyContent: 'center',
      left: 0,
      position: 'fixed',
      right: 0,
      top: 60,
      zIndex: 99999,
    }}>
    <Row
      align='end'
      direction='column'
      element='ul'
      justify='center'
      sx={{
        m: 0,
        p: 0,
        pr: 5,
        width: '100%',
      }}>
      <Trail
        delay={300}
        from={{ opacity: 0 }}
        keys={(item) => item.slug}
        to={{ opacity: 1 }}
        items={navData}>
        {(item) => (props) => (
          <animated.li style={props} sx={{ listStyle: 'none', mb: 2 }}>
            <Typography
              element='a'
              href={item.slug}
              variant='h4'
              sx={{ variant: 'styles.mobileNavLinks' }}>
              {item.title}
            </Typography>
          </animated.li>
        )}
      </Trail>
    </Row>
  </animated.div>
);

export { MenuModal };
