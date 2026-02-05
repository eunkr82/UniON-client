import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const base = recipe({
  base: {
    display: 'flex',
    width: '100%',
    padding: '1.4rem 2rem',
    border: `1px solid ${themeVars.color.gray_400}`,
    borderRadius: '10px',
    color: themeVars.color.gray_900,
    caretColor: themeVars.color.primary,
    ...themeVars.font.body_18r,

    selectors: {
      '&::placeholder': {
        color: themeVars.color.gray_400,
      },
      '&:focus-within': {
        borderColor: themeVars.color.primary,
        color: themeVars.color.gray_900,
      },
      '&[data-open="true"]:focus-within': {
        borderColor: themeVars.color.primary,
        color: themeVars.color.primary,
      },
    },
  },
});

export const iconSlot = style({
  display: 'flex',
  alignItems: 'center',
});
