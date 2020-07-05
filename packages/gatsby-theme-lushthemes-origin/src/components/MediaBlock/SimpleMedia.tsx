/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';
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
      sx={{ py: [100, 100, 120] }}
      withContainer={true}>
      <Row
        align='center'
        direction='column'
        element='figure'
        justify='center'
        sx={{ m: 0 }}>
        {children}
        {caption && (
          <Row
            align='center'
            direction='column'
            element='figcaption'
            justify='center'
            sx={{
              textAlign: 'center',
              bg: 'transparent',
              py: 6,
              variant: 'Typography.figcaption',
              width: '100%',
            }}>
            {caption}
          </Row>
        )}
      </Row>
    </Row>
  );
};

export default SimpleMedia;
