import type { ReactNode } from 'react';

import * as styles from './chip.css';

interface ChipProps {
  children: ReactNode;
}

const Chip = ({ children }: ChipProps) => {
  return <span className={styles.chip}>{children}</span>;
};

export default Chip;
