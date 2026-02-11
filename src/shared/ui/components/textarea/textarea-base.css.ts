import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  padding: '3rem',
  border: `1px solid ${themeVars.color.gray_400}`,
  borderRadius: '20px',
  color: themeVars.color.gray_800,
  ...themeVars.font.body_18r,
});
