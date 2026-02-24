import type { ReactNode } from 'react';

import * as styles from './field-base.css';

export interface FieldBaseProps {
  children: ReactNode;
  iconSlot?: ReactNode;
}

const FieldBase = ({ children, iconSlot }: FieldBaseProps) => {
  return (
    <div className={styles.base()}>
      {children}
      {iconSlot ? <span className={styles.iconSlot}>{iconSlot}</span> : null}
    </div>
  );
};

export default FieldBase;
