/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import { Row, Typography } from '../../ui';
import styles from './Awards.module.css';

type Award = {
  award: string;
  awardedBy: string;
  date: string;
};

interface AwardsProps {
  list: Award[];
  listTitle: string;
  title: string;
}

const Awards = ({ list, listTitle, title }: AwardsProps) => {
  return (
    <Row
      align='center'
      className={styles.container}
      containerClassName={styles.rowContainer}
      element='section'
      withContainer={true}>
      <Typography
        className={styles.title}
        color='white'
        element='h2'
        variant='h2'
        weight='bold'>
        {title}
      </Typography>
      <Row
        align='center'
        className={styles.listContainer}
        direction='column'
        element='div'>
        <Typography
          className={styles.listTitle}
          color='white'
          element='h3'
          sx={{
            mb: 5,
            textAlign: ['center', 'center', 'left'],
          }}
          variant='h3'
          weight='bold'>
          {listTitle}
        </Typography>
        <table sx={{ width: '100%' }}>
          <tbody>
            {list.map((l, index) => (
              <Row
                align='center'
                key={index}
                direction='row'
                element='tr'
                justify='between'
                sx={{
                  color: 'white',
                  flex: 1,
                  borderBottom: 'solid 1px silver',
                  py: 4,
                }}>
                <td sx={{ flex: 1 }}>{l.award}</td>
                <td sx={{ flex: 1 }}>{l.awardedBy}</td>
                <td>{l.date}</td>
              </Row>
            ))}
          </tbody>
        </table>
      </Row>
    </Row>
  );
};

export { Awards };
