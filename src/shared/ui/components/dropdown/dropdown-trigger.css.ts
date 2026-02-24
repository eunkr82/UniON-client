import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const base = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '1.4rem 2rem',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '10px',
  color: themeVars.color.gray_900,
  ...themeVars.font.body_18r,

  selectors: {
    '&:focus-visible': {
      borderColor: themeVars.color.primary,
      color: themeVars.color.gray_900,
      outline: 'none',
    },
    '&[data-open="true"]:focus-visible': {
      borderColor: themeVars.color.primary,
      color: themeVars.color.primary,
    },
  },
});

export const iconSlot = style({
  display: 'flex',
  alignItems: 'center',
});

export const placeholder = style({
  color: themeVars.color.gray_400,
});

export const label = style({
  color: themeVars.color.gray_900,
});
