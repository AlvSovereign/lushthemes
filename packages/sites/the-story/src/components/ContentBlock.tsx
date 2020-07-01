/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import BlockContent, {
  SanityBlockContent,
} from '@sanity/block-content-to-react';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

import MyStoryHero from '../gatsby-theme-lushthemes-origin/components/Hero/MyStoryHero';
import { Typography } from '../gatsby-theme-lushthemes-origin/components/ui';

interface ContentBlockProps {
  blocks: SanityBlockContent;
}

const config = {
  projectId: '7805c5hv',
  dataset: 'production',
};

const typoElementMapper = {
  hero: 'h1',
  h1: 'h1',
  h2: 'h2',
  h4: 'h4',
  normal: 'p',
};

const typeVariantMapper = {
  hero: 'hero',
  h1: 'h1',
  h2: 'h2',
  h4: 'h4',
  normal: 'p',
};

const serializers = {
  types: {
    block: ({ children, node }) => {
      const { style } = node;

      return (
        <Typography
          element={typoElementMapper[style]}
          variant={typeVariantMapper[style]}>
          {children}
        </Typography>
      );
    },
    myStoryHero: ({ node }) => {
      const { content, image } = node;
      const fluidImage = getFluidGatsbyImage(
        image.asset.id,
        { maxWidth: 800 },
        config
      );

      return (
        <MyStoryHero fluidImage={fluidImage}>
          <BlockContent blocks={content} serializers={serializers} />
        </MyStoryHero>
      );
    },
  },
};

const ContentBlock = ({ blocks }: ContentBlockProps) => {
  return <BlockContent blocks={blocks} serializers={serializers} />;
};

export default ContentBlock;
