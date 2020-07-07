/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import { Row } from '../ui';

interface MenuModalProps {}

const MenuModal = ({}: MenuModalProps) => {
  const pages = ['page one', 'page two', 'page three', 'page four'];

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
      {pages.map((page, index) => (
        <p>{page}</p>
      ))}
    </Row>
  );
};

export default MenuModal;
