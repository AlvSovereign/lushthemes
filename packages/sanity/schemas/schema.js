// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import {
  address,
  awards,
  author,
  category,
  contact,
  navigation,
  page,
  post,
  siteMetadata,
  socialLinks,
  workExperience,
} from './documents';
import {
  awards as awardsModule,
  homeHero,
  myStoryFooter,
  myStoryHero,
  simpleMedia,
  workExperience as workExperienceModule,
} from './contentModules';

import contactLink from './contentType/references/contactLink';
import socialLink from './contentType/references/socialLink';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    address,
    awards,
    author,
    category,
    contact,
    navigation,
    page,
    post,
    siteMetadata,
    socialLinks,
    workExperience,

    // content modules
    awardsModule,
    homeHero,
    myStoryFooter,
    myStoryHero,
    simpleMedia,
    workExperienceModule,
    // The following are block content components
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    contactLink,
    socialLink,
    blockContent,
  ]),
});
