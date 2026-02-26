import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const button = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4rem 0',
  border: `1px dashed ${themeVars.color.gray_400}`,
  borderRadius: '10px',
  color: themeVars.color.gray_400,
  ...themeVars.font.body_18r,
});

export const addedItemContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
});

export const addedImageContainer = style({
  width: '9.2rem',
  height: '9.2rem',
  border: `1px solid ${themeVars.color.gray_200}`,
  borderRadius: '10px',
  overflow: 'hidden',
});

export const addedImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const fileNameContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  minWidth: '0',
  gap: '1rem',
  color: themeVars.color.gray_400,
  ...themeVars.font.body_14r,
});

export const fileNameText = style({
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
