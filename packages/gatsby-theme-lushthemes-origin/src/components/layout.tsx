/** @jsx jsx */
import { Fragment } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { jsx } from 'theme-ui';
import { Global } from '@emotion/core';

import MyStoryHero from '../components/Hero/MyStoryHero/MyStoryHero';

const shortcodes = { MyStoryHero };

const Layout = ({ children }) => (
  <MDXProvider components={shortcodes}>
    <Fragment>
      <Global styles={{ body: { margin: 0 } }} />
      <div
        sx={{
          width: '100%',
          maxWidth: 1440,
          mx: 'auto',
        }}>
        <header
          sx={{
            bg: 'o-silver',
            color: 'white',
            fontFamily: 'heading',
            p: 3,
          }}>
          gatsby-theme-docs
        </header>
        <main sx={{ mx: 'auto', width: '100%' }}>{children}</main>
      </div>
    </Fragment>
  </MDXProvider>
);

export default Layout;
