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
      <header
        sx={{ bg: 'silver', color: 'white', fontFamily: 'heading', p: 3 }}>
        gatsby-theme-docs
      </header>
      <main sx={{ mx: 'auto', maxWidth: 650, width: '90vw' }}>{children}</main>
    </Fragment>
  </MDXProvider>
);

export default Layout;
