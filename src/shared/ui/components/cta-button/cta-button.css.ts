import { themeVars } from '@shared/styles';
import { recipe } from '@vanilla-extract/recipes';

export const base = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '1.1rem 20.6rem',
    borderRadius: '10px',
    color: themeVars.color.gray_000,
    ...themeVars.font.body_20sb,

    selectors: {
      '&:disabled': {
        backgroundColor: themeVars.color.gray_200,
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    color: {
      primary: {
        backgroundColor: themeVars.color.primary_dark,
      },
      gray: {
        backgroundColor: themeVars.color.gray_400,
      },
    },
  },
});
