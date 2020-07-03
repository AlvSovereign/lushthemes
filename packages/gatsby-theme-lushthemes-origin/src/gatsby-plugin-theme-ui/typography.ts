const headingBase = {
  color: 'text',
  fontFamily: 'heading',
  fontWeight: 'heading',
  m: 0,
};

const textBase = {
  color: 'text',
  fontFamily: 'body',
  fontWeight: 'body',
  m: 0,
};

const Typography = {
  hero: {
    ...headingBase,
    fontSize: [7, 8, 9],
    lineHeight: 'heading',
    mb: 6,
  },
  h1: { ...headingBase, fontSize: [5, 6, 7], lineHeight: 'heading', mb: 5 },
  h2: {
    ...headingBase,
    fontSize: [4, 5, 6],
    lineHeight: 'heading',
  },
  h3: {
    ...headingBase,
    fontSize: [3, 4, 5],
    lineHeight: 'heading',
  },
  h4: {
    ...headingBase,
    fontSize: [2, 3, 4],
    lineHeight: 'heading',
  },
  p: {
    ...textBase,
    fontSize: 1,
    fontWeight: 'body',
    lineHeight: 'body',
  },
  a: {
    ...textBase,
  },
  small: {
    ...textBase,
    fontSize: 0,
    fontWeight: 'body',
    lineHeight: 1,
  },
};

export default Typography;
