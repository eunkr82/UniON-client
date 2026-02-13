import { themeVars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const stepperContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '18.8rem',
  color: themeVars.color.gray_800,
  ...themeVars.font.body_20sb,
});

export const icon = style({
  width: '4.3rem',
  height: '4.3rem',
});
