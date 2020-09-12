/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import { Row, Typography } from '../../ui';
import styles from './WorkExperience.module.css';

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
    className={styles.container}
    direction='column'
    element='section'
    withContainer={true}>
    <Row className={styles.contentContainer} element='div'>
      <div className={styles.titleContainer}>
        <Typography className={styles.title} element='h2' variant='h2'>
          {title}
        </Typography>
        <Typography
          element='a'
          href={downloadUrl}
          variant='small'
          weight='bold'>
          {downloadText}
        </Typography>
      </div>
      <Typography className={styles.introText} element='p' variant='p'>
        {introText}
      </Typography>
    </Row>
    <Row
      className={styles.workExperienceContainer}
      direction='row'
      element='div'
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
