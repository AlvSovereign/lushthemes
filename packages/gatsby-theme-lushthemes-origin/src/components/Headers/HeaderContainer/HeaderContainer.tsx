/**@jsx jsx */
import { jsx } from 'theme-ui';
import {
  Children,
  cloneElement,
  Fragment,
  ReactNode,
  useState,
  ReactElement,
  useEffect,
} from 'react';
import { useTransition } from 'react-spring';

import { Row } from '../../ui';

interface HeaderContainerProps {
  className?: string;
  header: ReactElement;
  position: 'fixed' | 'relative';
  responsiveMenu?: ReactElement;
}

const HeaderContainer = ({
  className,
  header,
  position,
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

  // block body scrolling;
  document.body.style.overflow = showMenu ? 'hidden' : 'visible';

  return (
    <Fragment>
      <Row
        align='center'
        className={className}
        direction='row'
        element='header'
        justify='center'
        sx={{ height: '60px', variant: `Header.${position}` }}>
        {cloneElement(header, { setShowMenu, showMenu })}
      </Row>
      {transitions.map(
        ({ item, key, props }) =>
          item && cloneElement(responsiveMenu, { key, props })
      )}
    </Fragment>
  );
};

export default HeaderContainer;
