/**@jsx jsx */
import { jsx } from 'theme-ui';
import { ReactNode } from 'react';
import { Row, Typography } from '../ui';

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
      sx={{ background: 'silver', py: [100, 100, 120] }}
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
              bg: 'transparent',
              py: 6,
              variant: 'Typography.figcaption',
              width: '100%',
            }}>
            <Typography color='white' element='p' variant='p'>
              {caption}
            </Typography>
          </Row>
        )}
      </Row>
    </Row>
  );
};

export default SimpleMedia;
