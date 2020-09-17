import React from 'react';
import cx from 'classnames';

import { Button, Row, Typography } from '../../ui';
import {
  Behance,
  Dribbble,
  Facebook,
  Instagram,
  Mail,
} from '../../../assets/icons';
import styles from './StoryFooter.module.css';

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
  url: string;
};

interface StoryFooterProps {
  address?: TAddress;
  addressTitle?: string;
  contact?: TContact;
  contactTitle?: string;
  socials?: TSocialLinks[];
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
  socials,
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
      className={styles.container}
      containerClassName={styles.rowContainer}
      element='section'
      withContainer={true}>
      <Row className={styles.titleContainer} direction='column' element='div'>
        <Typography
          className={styles.title}
          element='h2'
          variant='h2'
          weight='bold'>
          {title}
        </Typography>
        <Typography
          className={styles.subtitle}
          element='p'
          variant='p'
          weight='bold'>
          {subtitle}
        </Typography>
        <Row
          align='center'
          className={styles.socialLinksContainer}
          direction='row'
          element='div'>
          {socials.map((link, index, arr) => (
            <a
              className={cx(index + 1 !== arr.length && styles.socialLink)}
              href={link.url}
              key={index}
              target='_blank'>
              {iconMapper[link.name.toLowerCase()]}
            </a>
          ))}
        </Row>
      </Row>
      <Row
        align='center'
        className={styles.detailsContainer}
        direction='column'
        element='div'
        justify='center'>
        <Row
          align='center'
          className={styles.detailsRow}
          direction='row'
          element='div'
          justify='center'>
          <Row
            align='center'
            className={styles.contactDetailsContainer}
            direction='column'
            element='div'>
            <Typography align='center' element='h5' variant='p' weight='bold'>
              {contactTitle}
            </Typography>
            <Typography align='center' color='grey' element='h5' variant='p'>
              {email}
            </Typography>
            <Typography align='center' color='grey' element='h5' variant='p'>
              {phone}
            </Typography>
          </Row>
          <Row
            align='center'
            className={styles.contactDetailsContainer}
            direction='column'
            element='div'>
            <Typography align='center' element='h5' variant='p' weight='bold'>
              {addressTitle}
            </Typography>
            {address1 && (
              <Typography align='center' color='grey' element='h5' variant='p'>
                {address1}
              </Typography>
            )}
            {address2 && (
              <Typography align='center' color='grey' element='h5' variant='p'>
                {address2}
              </Typography>
            )}
            {address3 && (
              <Typography align='center' color='grey' element='h5' variant='p'>
                {address3}
              </Typography>
            )}
            {city && (
              <Typography align='center' color='grey' element='h5' variant='p'>
                {city}
              </Typography>
            )}
            {district && (
              <Typography align='center' color='grey' element='h5' variant='p'>
                {district}
              </Typography>
            )}
            {postcode && (
              <Typography align='center' color='grey' element='h5' variant='p'>
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

export { StoryFooter };
