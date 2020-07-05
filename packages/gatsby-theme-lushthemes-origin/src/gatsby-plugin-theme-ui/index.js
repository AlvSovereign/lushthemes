import Button from './button';
import Shadows from './shadows';
import Typography from './typography';

export default {
  useBorderBox: true,
  breakpoints: ['600px', '768px', '1280px'],
  space: [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [16, 20, 24, 28, 32, 40, 48, 56, 72, 84],
  fontWeights: {
    body: 500,
    heading: 700,
    bold: 900,
  },
  lineHeights: { body: 1.5, heading: 1.25 },
  colors: {
    black: '#000',
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    silver: '#c5c5c5',
    grey: '#7f7f7f',
    olive: '#3f3f3f',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
  Button,
  Typography,
  shadows: Shadows,
};
