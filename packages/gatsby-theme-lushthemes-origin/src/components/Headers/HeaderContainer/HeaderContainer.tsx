import React, {
  cloneElement,
  Fragment,
  useState,
  ReactElement,
  useEffect,
} from 'react';
import { useTransition } from 'react-spring';
import cx from 'classnames';

import { Row } from '../../ui';
import styles from './HeaderContainer.module.css';

interface HeaderContainerProps {
  className?: string;
  header: ReactElement;
  variant: 'sticky' | 'default';
  responsiveMenu?: ReactElement;
}

const HeaderContainer = ({
  className,
  header,
  variant = 'default',
  responsiveMenu,
}: HeaderContainerProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const transitions = useTransition(showMenu, null, {
    enter: { opacity: 1 },
    from: { opacity: 0.7 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    console.log('rendered ', showMenu);
  });

  // block body scrolling when menu is displayed
  document.body.style.overflow = showMenu ? 'hidden' : 'visible';

  return (
    <Fragment>
      <Row
        align='center'
        className={cx(
          styles.headerContainer,
          variant === 'sticky' && styles.headerSticky,
          className
        )}
        direction='row'
        element='header'
        justify='center'>
        {cloneElement(header, { setShowMenu, showMenu })}
      </Row>
      {transitions.map(
        ({ item, key, props }) =>
          item && cloneElement(responsiveMenu, { key, props })
      )}
    </Fragment>
  );
};

export { HeaderContainer };
