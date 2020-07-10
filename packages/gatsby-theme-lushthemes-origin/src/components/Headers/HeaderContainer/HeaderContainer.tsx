/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Children, cloneElement, Fragment, ReactNode, useState } from 'react';

import { Row } from '../../ui';

interface HeaderContainerProps {
  children: ReactNode;
  className?: string;
  position: 'absolute' | 'fixed' | 'relative';
  responsiveMenu?: ReactNode;
}

const HeaderContainer = ({
  children,
  className,
  position,
  responsiveMenu,
}: HeaderContainerProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

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
        sx={{ variant: `Header.${position}` }}>
        {Children.map(children, (child: any) =>
          cloneElement(child, { setShowMenu, showMenu })
        )}
      </Row>
      {showMenu && responsiveMenu}
    </Fragment>
  );
};

export default HeaderContainer;
