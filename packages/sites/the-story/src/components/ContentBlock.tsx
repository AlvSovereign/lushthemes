/**@jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import BlockContent, {
  SanityBlockContent,
} from '@sanity/block-content-to-react';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

import MyStoryHero from '../gatsby-theme-lushthemes-origin/components/Hero/MyStoryHero';

interface ContentBlockProps {
  blocks: SanityBlockContent;
}

const config = {
  projectId: '7805c5hv',
  dataset: 'production',
};

const serializers = {
  types: {
    hero: ({ children, node }) => {
      return <h1>{children}</h1>;
    },
    myStoryHero: ({ node }) => {
      const { content, image } = node;
      const fluidImage = getFluidGatsbyImage(
        image.asset.id,
        { maxWidth: 800 },
        config
      );
      console.log('fluidImage: ', fluidImage);

      return (
        <MyStoryHero fluidImage={fluidImage}>
          {<BlockContent blocks={content} serializers={serializers} />}
        </MyStoryHero>
      );
    },
  },
};

const ContentBlock = ({ blocks }: ContentBlockProps) => {
  return <BlockContent blocks={blocks} serializers={serializers} />;
};

export default ContentBlock;
