import { style } from '@vanilla-extract/css';

import { base } from '../textarea-base.css';

export const readTextarea = style([
  base,
  {
    minHeight: '24.3rem',
    height: 'auto',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
]);
