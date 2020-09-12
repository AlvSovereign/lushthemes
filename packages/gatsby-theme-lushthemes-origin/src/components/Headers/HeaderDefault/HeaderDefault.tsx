import React from 'react';
import cx from 'classnames';

import { Button, Row, Typography } from '../../ui';
import { Menu } from '../../../assets/icons';
import styles from './HeaderDefault.module.css';

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
      className={cx(styles.container, className)}
      direction='row'
      element='div'
      justify='between'
      withContainer={true}>
      <Typography classMName={styles.logo} element='a' href='/' variant='h4'>
        Origin.
      </Typography>
      <Row
        align='center'
        className={styles.navLinksContainer}
        direction='row'
        element='div'
        justify='around'>
        {navData.map(({ _id, slug, title }, index, arr) => (
          <Typography
            className={index + 1 !== arr.length && styles.navLink}
            element='a'
            href={slug}
            key={_id}
            variant='small'>
            {title.toUpperCase()}
          </Typography>
        ))}
      </Row>
      <Button
        className={styles.navCta}
        label='Contact Me'
        onClick={() => console.log('clicked')}
        variant='secondary'
      />
      <Button
        className={styles.navMenuButton}
        icon={{
          asset: <Menu />,
        }}
        onClick={handleClick}
        variant='plain'
      />
    </Row>
  );
};

export { HeaderDefault };
