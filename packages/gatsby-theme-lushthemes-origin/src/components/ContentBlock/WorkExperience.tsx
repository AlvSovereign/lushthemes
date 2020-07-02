/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Row, Typography } from '../ui';

interface WorkExperienceProps {
  title?: string;
}

const WorkExperience = ({ title }: WorkExperienceProps) => {
  return (
    <Row direction='row' element='section' sx={{ py: 10 }} withContainer={true}>
      <Row direction='row' element='div' sx={{ display: 'flex' }}>
        <div sx={{ flex: 1 }}>
          <Typography element='h2' variant='h2'>
            {title}
          </Typography>
          <a href='/#' sx={{ variant: 'Typography.a' }}>
            <Typography
              element='span'
              sx={{ fontWeight: 'heading' }}
              variant='small'>
              Download my Resume
            </Typography>
          </a>
        </div>
        <Typography element='p' sx={{ flex: 1 }} variant='p'>
          Write like a human. Don’t be afraid to break a few rules if it makes
          your writing more relatable. All of our content, from splashy homepage
          copy to system alerts, should be warm and human.
        </Typography>
      </Row>
      {/* <Row></Row> */}
    </Row>
  );
};

export default WorkExperience;
