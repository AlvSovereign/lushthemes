/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Helmet from 'react-helmet';

export type SiteMetadata = {
  openGraphDescription?: string;
  openGraphImage?: any;
  openGraphLocale?: string;
  openGraphTitle?: string;
  openGraphType?: string;
  openGraphUrl?: string;
  seoDescription?: string;
  seoImage?: any;
  seoTitle?: string;
  title: string;
  twitterDescription?: string;
  twitterImage?: any;
  twitterUsername?: string;
};

interface SEOProps {
  metadata: SiteMetadata;
}

const SEO = ({ metadata }: SEOProps) => {
  const {
    openGraphDescription,
    openGraphImage,
    openGraphLocale,
    openGraphTitle,
    openGraphType,
    openGraphUrl,
    twitterDescription,
    twitterImage,
    twitterUsername,
    seoDescription,
    seoImage,
    seoTitle,
  } = metadata;
  return (
    <Helmet>
      <meta name='title' content={seoTitle} />
      <meta name='description' content={seoDescription} />
      {seoImage && <meta name='image' content={seoImage.asset.url} />}
      {openGraphUrl && <meta property='og:url' content={openGraphUrl} />}
      {openGraphType === 'article' && (
        <meta property='og:type' content='article' />
      )}
      {seoTitle && <meta property='og:title' content={openGraphTitle} />}
      {openGraphDescription ||
        (seoDescription && (
          <meta
            property='og:description'
            content={openGraphDescription || seoDescription}
          />
        ))}
      {openGraphImage && (
        <meta property='og:image' content={openGraphImage.asset.url} />
      )}
      <meta name='twitter:card' content='summary_large_image' />
      {twitterUsername && (
        <meta name='twitter:creator' content={twitterUsername} />
      )}
      {seoTitle && <meta name='twitter:title' content={seoTitle} />}
      {twitterDescription ||
        (seoDescription && (
          <meta
            name='twitter:description'
            content={twitterDescription || seoDescription}
          />
        ))}
      {twitterImage && <meta name='twitter:image' content={twitterImage} />}
    </Helmet>
  );
};

export default SEO;
