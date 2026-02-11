import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

import { base } from '../textarea-base.css';

export const writeTextarea = style([
  base,
  {
    height: '24.3rem',
    overflowY: 'auto',
    resize: 'none',
    outline: 'none',
    caretColor: themeVars.color.primary,
    selectors: {
      '&::placeholder': {
        color: themeVars.color.gray_400,
      },
    },
  },
]);
