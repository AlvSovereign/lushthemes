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

type TAddress = {
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  district?: string;
  postcode?: string;
};

type TContact = {
  email?: string;
  phone?: string;
};

type TSocialLinks = {
  name: string;
  href: string;
};

interface StoryFooterProps {
  address?: TAddress;
  addressTitle?: string;
  contact?: TContact;
  contactTitle?: string;
  socialLinks?: TSocialLinks[];
  subtitle?: string;
  title?: string;
}

const iconMapper = {
  behance: <Behance height={48} width={48} />,
  dribbble: <Dribbble height={48} width={48} />,
  facebook: <Facebook height={48} width={48} />,
  instagram: <Instagram height={48} width={48} />,
  mail: <Mail />,
};

const StoryFooter = ({
  address,
  addressTitle,
  contact,
  contactTitle,
  socialLinks,
  subtitle,
  title,
}: StoryFooterProps) => {
  const {
    city = null,
    district = null,
    address1 = null,
    address2 = null,
    address3 = null,
    postcode = null,
  } = address;

  const { email = null, phone = null } = contact;

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
          {title}
        </Typography>
        <Typography
          element='h4'
          sx={{ mb: [8, 8, 10], textAlign: ['center', 'center', 'left'] }}
          variant='h4'>
          {subtitle}
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
              {contactTitle}
            </Typography>
            <Typography
              align='center'
              element='h5'
              sx={{ color: 'grey' }}
              variant='p'>
              {email}
            </Typography>
            <Typography
              align='center'
              element='h5'
              sx={{ color: 'grey' }}
              variant='p'>
              {phone}
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
              {addressTitle}
            </Typography>
            {address1 && (
              <Typography
                align='center'
                element='h5'
                sx={{ color: 'grey' }}
                variant='p'>
                {address1}
              </Typography>
            )}
            {address2 && (
              <Typography
                align='center'
                element='h5'
                sx={{ color: 'grey' }}
                variant='p'>
                {address2}
              </Typography>
            )}
            {address3 && (
              <Typography
                align='center'
                element='h5'
                sx={{ color: 'grey' }}
                variant='p'>
                {address3}
              </Typography>
            )}
            {city && (
              <Typography
                align='center'
                element='h5'
                sx={{ color: 'grey' }}
                variant='p'>
                {city}
              </Typography>
            )}
            {district && (
              <Typography
                align='center'
                element='h5'
                sx={{ color: 'grey' }}
                variant='p'>
                {district}
              </Typography>
            )}
            {postcode && (
              <Typography
                align='center'
                element='h5'
                sx={{ color: 'grey' }}
                variant='p'>
                {postcode}
              </Typography>
            )}
          </Row>
        </Row>

        <Button
          icon={{ asset: <Mail fill='white' />, placement: 'right' }}
          label='Send Email'
          onClick={() => console.log('clicked')}
          variant='secondary'
        />
      </Row>
    </Row>
  );
};

export default StoryFooter;
