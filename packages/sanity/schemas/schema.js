// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import post from './post';
import author from './author';

import page from './page';
import myStoryHero from './contentType/blocks/content/my-story-hero';
import simpleMedia from './contentType/mediaBlock/simpleMedia';
import workExperienceSection from './contentType/blocks/content/work-experience';
import workExperience from './contentType/references/work-experience';
import awards from './contentType/references/awards';
import awardsSection from './contentType/blocks/content/awards';
import storyFooter from './contentType/blocks/footers/story-footer';

import address from './contentType/references/address';
import contactLink from './contentType/references/contactLink';
import socialLink from './contentType/references/socialLink';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    page,
    // The following are block content components
    workExperienceSection,
    myStoryHero,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    workExperience,
    simpleMedia,
    awards,
    awardsSection,
    storyFooter,
    address,
    contactLink,
    socialLink,
    blockContent,
  ]),
});
