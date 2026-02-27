import { themeVars } from '@shared/styles';
import { keyframes, style } from '@vanilla-extract/css';

const slideUp = keyframes({
  from: {
    transform: 'translateY(25px)',
    opacity: 0,
  },
  to: {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

export const toastViewport = style({
  position: 'fixed',
  left: '50%',
  bottom: '2.5rem',
  zIndex: 9999,
  transform: 'translateX(-50%)',
});

export const toastContainer = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1.5rem',
  gap: '0.5rem',
  borderRadius: '15px',
  backgroundColor: themeVars.color.gray_800,
  animation: `${slideUp} 200ms ease-out forwards`,
});

export const icon = style({
  width: '2.4rem',
  height: '2.4rem',
  color: themeVars.color.primary,
});

export const message = style({
  color: themeVars.color.gray_000,
  ...themeVars.font.body_14r,
});
