import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

const singleLineEllipsis = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
} as const;

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '14px',
  overflow: 'hidden',
  ':hover': {
    transform: 'translateY(-3px)',
    boxShadow: `0 12px 20px rgba(0,0,0,0.1)`,
  },
});

export const imageContainer = style({
  width: '100%',
  aspectRatio: '1.94 / 1',
  overflow: 'hidden',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '1.7rem',
  gap: '3.2rem',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '0.4rem',
});

export const title = style({
  color: themeVars.color.gray_900,
  ...themeVars.font.body_20sb,
  ...singleLineEllipsis,
});

export const summary = style({
  color: themeVars.color.gray_400,
  ...themeVars.font.body_14m,
  ...singleLineEllipsis,
});

export const infoContainer = style({
  marginTop: 'auto',
  gap: '0.2rem',
  color: themeVars.color.gray_500,
  ...themeVars.font.body_14m,
});
