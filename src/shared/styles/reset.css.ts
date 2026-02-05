import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  margin: 0,
  padding: 0,
  lineHeight: '1.5',
  WebkitFontSmoothing: 'antialiased',
  textRendering: 'optimizeLegibility',
});

globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section',
  { display: 'block' },
);

globalStyle('ol, ul', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle('blockquote::before, blockquote::after, q::before, q::after', {
  content: '""',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: '0',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('button', {
  font: 'inherit',
  color: 'inherit',
});

globalStyle('input, textarea, select', {
  font: 'inherit',
  color: 'inherit',
  appearance: 'none',
  WebkitAppearance: 'none',
  background: 'transparent',
  border: 'none',
  outline: 'none',
});

globalStyle('button', {
  background: 'none',
  border: 0,
  padding: 0,
  cursor: 'pointer',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});
