import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const chip = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.8rem 1.6rem',
  gap: '0.5rem',
  border: `1px solid ${themeVars.color.gray_100}`,
  borderRadius: '20px',
  backgroundColor: themeVars.color.primary_light2,
  color: themeVars.color.primary_dark,
  ...themeVars.font.body_14m,
});

export const icon = style({
  width: '1.9rem',
  height: '1.9rem',
});
