/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Row, Typography } from '../../ui';

type TListData = {
  name: string;
  duration: string;
  link: string;
  position: string;
  role: string;
  url: string;
};
interface WorkExperienceProps {
  downloadText: string;
  downloadUrl: string;
  introText: string;
  listData: TListData[];
  title: string;
}

const WorkExperience = ({
  downloadText,
  downloadUrl,
  introText,
  listData,
  title,
}: WorkExperienceProps) => (
  <Row
    direction='column'
    element='section'
    sx={{ py: [100, 100, 120] }}
    withContainer={true}>
    <Row
      direction={['column', 'column', 'row']}
      element='div'
      sx={{ display: 'flex', mb: [100, 100, 120] }}>
      <div sx={{ flex: 1, mb: [8, 8, null] }}>
        <Typography element='h2' variant='h2' sx={{ mb: 3 }}>
          {title}
        </Typography>
        <a href={downloadUrl} sx={{ variant: 'Typography.a' }}>
          <Typography
            element='span'
            sx={{ fontWeight: 'heading' }}
            variant='small'>
            {downloadText}
          </Typography>
        </a>
      </div>
      <Typography element='p' sx={{ color: 'grey', flex: 1 }} variant='p'>
        {introText}
      </Typography>
    </Row>
    <Row
      direction='row'
      element='div'
      sx={{ display: 'flex', mx: [null, '-2%', '-2%'] }}
      wrap='wrap'>
      {(listData || []).map((d, index) => (
        <div
          key={index}
          sx={{
            flexBasis: ['auto', '46%', '29%'],
            mx: [null, '2%', '2%'],
            pb: 8,
          }}>
          <Typography
            element='h4'
            sx={{ fontWeight: 'heading', mb: 1 }}
            variant='h4'>
            {d.name}
          </Typography>
          <Typography element='p' sx={{ color: 'grey', mb: 5 }} variant='small'>
            {d.duration}
          </Typography>
          <Typography
            element='p'
            sx={{ fontWeight: 'heading', mb: 2 }}
            variant='p'>
            {d.position}
          </Typography>
          <Typography
            element='p'
            sx={{ color: 'grey', fontSize: 0, mb: 2 }}
            variant='p'>
            {d.role}
          </Typography>
          <hr sx={{ border: '1px solid silver' }} />
          <Typography
            element='a'
            href={d.url}
            sx={{ color: 'grey', fontWeight: 'heading', mr: 2 }}
            target='_blank'
            variant='small'>
            {d.link}
          </Typography>
        </div>
      ))}
    </Row>
  </Row>
);

export { WorkExperience };
