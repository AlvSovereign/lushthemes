/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import BlockContent, {
  SanityBlockContent,
} from '@sanity/block-content-to-react';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import Img from 'gatsby-image';

import {
  Awards,
  HomeHero,
  MyStoryHero,
  SimpleMedia,
  StoryFooter,
  Typography,
  WorkExperience,
} from 'gatsby-theme-lushthemes-origin';

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
    awardsSection: ({ node }) => {
      const { awardsList, listTitle, title } = node;

      return <Awards listTitle={listTitle} list={awardsList} title={title} />;
    },
    homeHero: ({ node }) => {
      const fluidImage = getFluidGatsbyImage(
        node.image.asset.id,
        { maxWidth: 800 },
        config
      );

      return (
        <HomeHero {...node} fluidImage={fluidImage} onCtaClick={() => {}} />
      );
    },
    myStoryHero: ({ node }) => {
      const { content, cta, image, subtitle, title } = node;
      const fluidImage = getFluidGatsbyImage(
        image.asset.id,
        { maxWidth: 800 },
        config
      );

      return (
        <MyStoryHero
          content={content}
          cta={cta}
          fluidImage={fluidImage}
          onCtaClick={() => {}}
          subtitle={subtitle}
          title={title}
        />
      );
    },
    simpleMedia: ({ node }) => {
      const { alt = null, caption = null, image = null, media = null } = node;
      const fluidImage =
        image && getFluidGatsbyImage(image.asset.id, { maxWidth: 800 }, config);

      return (
        <SimpleMedia caption={caption}>
          <Fragment>
            {fluidImage && (
              <Img fluid={fluidImage} alt={alt} sx={{ boxShadow: 2 }} />
            )}
            {media && (
              <video controls={true} sx={{ boxShadow: 2, width: '100%' }}>
                <source src={media.asset.url} type={media.asset.mimeType} />
              </video>
            )}
          </Fragment>
        </SimpleMedia>
      );
    },
    storyFooter: ({ node }) => {
      const { address, contact, ...rest } = node;

      return (
        <StoryFooter address={address[0]} contact={contact[0]} {...rest} />
      );
    },
    workExperienceSection: ({ node }) => {
      const {
        downloadText,
        downloadUrl,
        introText,
        listExperience,
        title,
      } = node;

      return (
        <WorkExperience
          downloadUrl={downloadUrl.asset.url}
          downloadText={downloadText}
          introText={introText}
          listData={listExperience}
          title={title}
        />
      );
    },
  },
};

const ContentBlock = ({ blocks }: ContentBlockProps) => {
  return <BlockContent blocks={blocks} serializers={serializers} />;
};

export default ContentBlock;
