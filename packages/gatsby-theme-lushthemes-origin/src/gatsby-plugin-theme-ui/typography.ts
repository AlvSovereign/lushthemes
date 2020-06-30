import { brotliDecompressSync } from 'zlib';

const headingBase = {
  color: 'text',
  fontFamily: 'heading',
  fontWeight: 'heading',
  m: 0,
};

const bodyBase = {
  color: 'text',
  fontFamily: 'body',
  fontWeight: 'body',
  m: 0,
};

const Typography = {
  hero: {
    ...headingBase,
    fontSize: 8,
    lineHeight: 'heading',
  },
  h1: {},
  h2: {
    ...headingBase,
    fontSize: 6,
    lineHeight: 'heading',
  },
  h3: {
    ...headingBase,
    fontSize: 5,
    lineHeight: 'heading',
  },
  h4: {
    ...bodyBase,
    fontSize: 4,
    fontWeight: 'body',
    lineHeight: 'body',
  },
  p: {
    ...bodyBase,
    fontSize: 0,
    fontWeight: 'body',
    lineHeight: 'body',
  },
};

export default Typography;
