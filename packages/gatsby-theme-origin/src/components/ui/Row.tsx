/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

interface RowProps {
  children: ReactNode;
  element: any; // the string of a HTML element
}

const Row = ({ element, children }: RowProps) => {
  const Element = element;

  return <Element>{children}</Element>;
};

export default Row;
