/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';

type Alignment = 'end' | 'flex' | 'start';
interface TypographyProps {
  align?: Alignment;
  children: ReactNode;
  element: any; // the string of a HTML element
  variant: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'span';
  [key: string]: any;
}

const Typography = ({
  align,
  color,
  children,
  element,
  variant,
  ...rest
}: TypographyProps) => {
  const Element = element;

  return (
    <Element
      sx={{ textAlign: align, variant: `Typography.${variant}`, color }}
      {...rest}>
      {children}
    </Element>
  );
};

export default Typography;
