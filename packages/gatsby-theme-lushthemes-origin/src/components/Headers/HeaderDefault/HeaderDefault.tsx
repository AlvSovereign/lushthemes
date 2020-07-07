/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import { Button, Row, Typography } from '../../ui';
import { Menu } from '../../../assets/icons';

interface HeaderDefaultProps {
  className?: string;
  setShowMenu: (showMenu: boolean) => void; // comes from the parent
  showMenu: boolean; // comes from the parent
}

const HeaderDefault = ({
  className,
  setShowMenu,
  showMenu,
}: HeaderDefaultProps) => {
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Row
      align='center'
      className={className}
      direction='row'
      element='div'
      justify='space-between'
      sx={{ flex: 1 }}
      withContainer={true}>
      <Typography
        element='a'
        href='/'
        sx={{ lineHeight: '1', textDecoration: 'none' }}
        variant='h4'>
        Origin.
      </Typography>
      <Row
        align='center'
        direction='row'
        element='div'
        justify='space-around'
        sx={{ display: ['none', 'none', 'flex'] }}>
        {['page one', 'page two', 'page three', 'page four'].map(
          (page, index, arr) => (
            <Typography
              element='a'
              href='/'
              key={index}
              sx={{
                mr: index + 1 === arr.length ? 0 : 3,
                variant: 'Typography.a',
              }}
              variant='span'>
              {page.toUpperCase()}
            </Typography>
          )
        )}
      </Row>
      <Button
        sx={{ display: ['none', 'none', 'block'] }}
        onClick={() => console.log('clicked')}
        value='Contact Me'
        variant='primary'
      />
      <Button
        icon={{
          asset: <Menu />,
          placement: 'center',
        }}
        onClick={handleClick}
        sx={{ display: ['block', 'block', 'none'] }}
        variant='plain'
      />
    </Row>
  );
};

export default HeaderDefault;
