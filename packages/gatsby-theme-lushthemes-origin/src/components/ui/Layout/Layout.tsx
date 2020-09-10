import React, { ReactNode } from 'react';

import { Row } from '..';
import '../../../stylesheets/normalize.css';
import '../../../stylesheets/index.css';

interface LayoutProps {
  /**
   * The React children thet is rendered
   */
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Row direction='column' element='main'>
      {children}
    </Row>
  );
};
