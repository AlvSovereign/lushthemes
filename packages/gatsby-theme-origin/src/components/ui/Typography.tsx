/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  element: any; // the string of a HTML element
}

const Typography = ({ element, children }: TypographyProps) => {
  const Element = element;
  return <Element>{children}</Element>;
};

export default Typography;
