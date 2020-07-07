const headingBase = {
  color: 'text',
  fontFamily: 'heading',
  fontWeight: 'heading',
  my: 0,
};

const textBase = {
  color: 'text',
  fontFamily: 'body',
  fontWeight: 'body',
  my: 0,
};

const Typography = {
  a: {
    ...textBase,
    textDecoration: 'none',
  },
  figcaption: {
    ...textBase,
    color: 'grey',
    fontSize: 0,
    fontStyle: 'italic',
  },
  hero: {
    ...headingBase,
    fontSize: [7, 8, 9],
    letterSpacing: '-4px',
    lineHeight: 'heading',
    mb: 6,
  },
  h1: {
    ...headingBase,
    fontSize: [5, 6, 7],
    letterSpacing: '-2px',
    lineHeight: 'heading',
    mb: 5,
  },
  h2: {
    ...headingBase,
    fontSize: [4, 5, 6],
    letterSpacing: '-2px',
    lineHeight: 'heading',
  },
  h3: {
    ...headingBase,
    fontSize: [3, 4, 5],
    letterSpacing: '-1px',
    lineHeight: 'heading',
  },
  h4: {
    ...headingBase,
    fontSize: [2, 3, 4],
    letterSpacing: '-1px',
    lineHeight: 'heading',
  },
  p: {
    ...textBase,
    fontSize: 1,
    fontWeight: 'body',
    lineHeight: 'body',
  },
  small: {
    ...textBase,
    fontSize: 0,
    fontWeight: 'body',
    lineHeight: 1,
  },
  span: {
    ...textBase,
    fontSize: 1,
    fontWeight: 'body',
    lineHeight: 'body',
  },
};

export default Typography;
