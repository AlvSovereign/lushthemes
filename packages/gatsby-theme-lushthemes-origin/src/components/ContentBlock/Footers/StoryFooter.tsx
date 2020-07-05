/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import { Button, Row, Typography } from '../../ui';
import {
  Behance,
  Dribbble,
  Facebook,
  Instagram,
  Mail,
} from '../../../assets/icons';

interface StoryFooterProps {}

const socialLinks = [
  { name: 'facebook', href: 'https:www.google.com' },
  { name: 'instagram', href: 'https:www.google.com' },
  { name: 'dribble', href: 'https:www.google.com' },
  { name: 'behance', href: 'https:www.google.com' },
];

const iconMapper = {
  behance: <Behance height={48} width={48} />,
  dribble: <Dribbble height={48} width={48} />,
  facebook: <Facebook height={48} width={48} />,
  instagram: <Instagram height={48} width={48} />,
  mail: <Mail />,
};

const StoryFooter = ({}: StoryFooterProps) => {
  return (
    <Row
      direction={['column', 'column', 'row']}
      element='section'
      sx={{ py: [100, 100, 120] }}
      withContainer={true}>
      <Row direction='column' element='div' sx={{ flex: 1, mb: [8, 8, 0] }}>
        <Typography
          element='h2'
          sx={{ mb: 6, textAlign: ['center', 'center', 'left'] }}
          variant='h2'>
          Got an idea?
        </Typography>
        <Typography
          element='h4'
          sx={{ mb: [8, 8, 10], textAlign: ['center', 'center', 'left'] }}
          variant='h4'>
          I love to collab with curious and smart. Let’s do great things
          together!
        </Typography>
        <Row
          align={'center'}
          direction='row'
          element='div'
          justify={['space-around', 'space-around', 'start']}>
          {socialLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              sx={{ mr: index + 1 === socialLinks.length ? 0 : 6 }}>
              {iconMapper[link.name]}
            </a>
          ))}
        </Row>
      </Row>
      <Row
        align='center'
        direction='column'
        element='div'
        justify='center'
        sx={{ flex: 1 }}>
        <Row
          align='center'
          direction='row'
          element='div'
          justify='center'
          sx={{ flex: 1, mb: 6, width: '100%' }}>
          <Row
            align='center'
            direction='column'
            element='div'
            sx={{ flex: 1, height: '100%' }}>
            <Typography
              align='center'
              element='h5'
              sx={{ fontWeight: 'heading' }}
              variant='p'>
              Contact me.
            </Typography>
            <Typography
              align='center'
              element='h5'
              sx={{ color: 'grey' }}
              variant='p'>
              ollie@origin.com
            </Typography>
            <Typography
              align='center'
              element='h5'
              sx={{ color: 'grey' }}
              variant='p'>
              +41 9912 882 345
            </Typography>
          </Row>
          <Row
            align='center'
            direction='column'
            element='div'
            sx={{ flex: 1, height: '100%' }}>
            <Typography
              align='center'
              element='h5'
              sx={{ fontWeight: 'heading' }}
              variant='p'>
              Visit me.
            </Typography>
            <Typography
              align='center'
              element='h5'
              sx={{ color: 'grey' }}
              variant='p'>
              Flat 22, 31 Origin Heights
            </Typography>
            <Typography
              align='center'
              element='h5'
              sx={{ color: 'grey' }}
              variant='p'>
              Origin Road
            </Typography>
            <Typography
              align='center'
              element='h5'
              sx={{ color: 'grey' }}
              variant='p'>
              London
            </Typography>
            <Typography
              align='center'
              element='h5'
              sx={{ color: 'grey' }}
              variant='p'>
              N1 1OR
            </Typography>
          </Row>
        </Row>

        <Button
          icon={{ asset: <Mail fill='white' />, placement: 'right' }}
          onClick={() => console.log('clicked')}
          value='Send Email'
          variant='secondary'
        />
      </Row>
    </Row>
  );
};

export default StoryFooter;
