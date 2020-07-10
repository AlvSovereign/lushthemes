/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import { Row, Typography } from '../../ui';

interface MenuModalProps {
  navData: any[];
}

const MenuModal = ({ navData }: MenuModalProps) => {
  return (
    <Row
      align='center'
      direction='column'
      element='aside'
      justify='center'
      style={{
        backgroundColor: 'white',
        bottom: 0,
        height: `calc(100vh - 60px)`,
        left: 0,
        position: 'fixed',
        right: 0,
        top: 60,
        zIndex: 99,
      }}>
      {navData.map(({ _id, slug, title }, index, arr) => (
        <Typography
          element='a'
          href={slug}
          key={_id}
          sx={{
            mr: index + 1 === arr.length ? 0 : 3,
            variant: 'styles.navLinks',
          }}
          variant='span'>
          {title.toUpperCase()}
        </Typography>
      ))}
    </Row>
  );
};

export default MenuModal;
