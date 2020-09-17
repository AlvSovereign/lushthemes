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
          variant='h3'
          weight='bold'>
          {listTitle}
        </Typography>
        <table className={styles.table}>
          <tbody>
            {list.map((l, index) => (
              <Row
                align='center'
                className={styles.tableRow}
                direction='row'
                key={index}
                element='tr'
                justify='between'>
                <td className={styles.tabelCell}>
                  <Typography color='white' element='p' variant='p'>
                    {l.award}
                  </Typography>
                </td>
                <td className={styles.tabelCell}>
                  <Typography color='white' element='p' variant='p'>
                    {l.awardedBy}
                  </Typography>
                </td>
                <td>
                  <Typography color='white' element='p' variant='p'>
                    {l.date}
                  </Typography>
                </td>
              </Row>
            ))}
          </tbody>
        </table>
      </Row>
    </Row>
  );
};

export { Awards };
