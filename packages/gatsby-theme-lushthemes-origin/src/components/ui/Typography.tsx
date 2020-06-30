/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';
import typography from '../../gatsby-plugin-theme-ui/typography';

interface TypographyProps {
  children: ReactNode;
  color?: 'olive';
  element: any; // the string of a HTML element
  variant: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}

const Typography = ({
  color,
  children,
  element,
  variant,
  ...rest
}: TypographyProps) => {
  const Element = element;
  return (
    <Element sx={{ variant: `Typography.${variant}`, color }} {...rest}>
      {children}
    </Element>
  );
};

export default Typography;
