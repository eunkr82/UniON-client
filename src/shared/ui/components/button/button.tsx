import type { MouseEventHandler, ReactNode } from 'react';

import * as styles from './button.css';

interface ButtonProps {
  color: 'primary' | 'dark' | 'gray';
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ color, children, onClick }: ButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={styles.button({ color })}
    >
      {children}
    </button>
  );
};

export default Button;
