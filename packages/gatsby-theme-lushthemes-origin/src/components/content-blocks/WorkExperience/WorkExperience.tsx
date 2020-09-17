import React from 'react';

import { Button, Row, Typography } from '../../ui';
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
  downloadCta: string;
  downloadUrl: string;
  introText: string;
  listData: TListData[];
  title: string;
}

const WorkExperience = ({
  downloadCta,
  downloadUrl,
  introText,
  listData,
  title,
}: WorkExperienceProps) => (
  <Row
    className={styles.container}
    containerClassName={styles.rowContainer}
    direction='column'
    element='section'
    withContainer={true}>
    <Row className={styles.contentContainer} element='div'>
      <div className={styles.titleContainer}>
        <Typography
          className={styles.title}
          element='h2'
          variant='h2'
          weight='bold'>
          {title}
        </Typography>
        <Button
          className={styles.cta}
          label={downloadCta}
          onClick={() => window.open(downloadUrl)}
          variant='secondary'
        />
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
      {listData.map((d, index) => (
        <div key={index} className={styles.workExperience}>
          <Typography
            className={styles.name}
            element='h4'
            variant='h4'
            weight='bold'>
            {d.name}
          </Typography>
          <Typography color='grey' element='p' variant='small'>
            {d.duration}
          </Typography>
          <Typography
            className={styles.position}
            element='p'
            variant='p'
            weight='bold'>
            {d.position}
          </Typography>
          <Typography color='grey' element='p' variant='small'>
            {d.role}
          </Typography>
          <hr className={styles.hr} />
          <Typography
            classNme={styles.link}
            element='a'
            href={d.url}
            target='_blank'
            variant='small'
            weight='bold'>
            {d.link}
          </Typography>
        </div>
      ))}
    </Row>
    <Button
      className={styles.mobileCta}
      label={downloadCta}
      onClick={() => window.open(downloadUrl)}
      variant='secondary'
    />
  </Row>
);

export { WorkExperience };
