/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Row, Typography } from '../../ui';

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
      direction={['column', 'column', 'row']}
      element='section'
      sx={{ backgroundColor: 'black', py: [100, 100, 120] }}
      withContainer={true}>
      <Typography element='h2' sx={{ color: 'white', flex: 1 }} variant='h2'>
        {title}
      </Typography>
      <Row
        align='center'
        direction='column'
        element='div'
        sx={{ flex: 1, width: '100%' }}>
        <Typography
          element='h3'
          sx={{
            color: 'white',
            mb: 5,
            textAlign: ['center', 'center', 'left'],
          }}
          variant='h3'>
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
