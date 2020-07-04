/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment, ReactNode } from 'react';
import { Row } from '../ui';

interface SimpleMediaProps {
  caption?: string;
  children: ReactNode;
}

const SimpleMedia = ({ caption, children }: SimpleMediaProps) => {
  return (
    <Row
      align='center'
      display='block'
      direction='column'
      element='section'
      withContainer={true}>
      <Row
        align='center'
        direction='column'
        element='figure'
        justify='center'
        sx={{ backgroundColor: 'olive', m: 0 }}>
        {children}
        {caption && (
          <Row
            align='center'
            direction='column'
            element='figcaption'
            justify='center'
            sx={{
              textAlign: 'center',
              backgroundColor: 'background',
              py: 6,
              variant: 'Typography.figcaption',
            }}>
            {caption}
          </Row>
        )}
      </Row>
    </Row>
  );
};

export default SimpleMedia;
