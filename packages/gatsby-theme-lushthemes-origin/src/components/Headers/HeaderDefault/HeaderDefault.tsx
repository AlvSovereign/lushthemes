/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import { Button, Row, Typography } from '../../ui';
import { Menu } from '../../../assets/icons';

interface HeaderDefaultProps {
  className?: string;
  navData: any[];
  [key: string]: any;
}

const HeaderDefault = ({
  className,
  navData,
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
        sx={{ pl: [4, 4, 0], lineHeight: '1', textDecoration: 'none' }}
        variant='h4'>
        Origin.
      </Typography>
      <Row
        align='center'
        direction='row'
        element='div'
        justify='space-around'
        sx={{ display: ['none', 'none', 'flex'] }}>
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
      <Button
        sx={{ boxShadow: 'none', display: ['none', 'none', 'block'] }}
        onClick={() => console.log('clicked')}
        value='Contact Me'
        variant='secondary'
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
