import type { ReactNode } from 'react';

import * as styles from './cta-button.css';

interface CtaButtonProps {
  color: 'primary' | 'gray';
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const CtaButton = ({ color, children, disabled, onClick }: CtaButtonProps) => {
  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      className={styles.base({ color })}
    >
      {children}
    </button>
  );
};

export default CtaButton;
