import { createGlobalTheme } from '@vanilla-extract/css';

import { color } from './tokens/color.css';
import { font } from './tokens/font.css';
import { typography } from './tokens/typo.css';

const tokens = {
  color: color,
  font: font,
  ...typography,
};

const themeVars = createGlobalTheme(':root', tokens);

export { themeVars, tokens };
