import type { ReactNode } from 'react';

import * as styles from './field-base.css';

export interface FieldBaseProps {
  children: ReactNode;
  open?: boolean;
  iconSlot?: ReactNode;
}

const FieldBase = ({ children, open, iconSlot }: FieldBaseProps) => {
  return (
    <div className={styles.base()} data-open={open ? 'true' : 'false'}>
      {children}
      {iconSlot ? <span className={styles.iconSlot}>{iconSlot}</span> : null}
    </div>
  );
};

export default FieldBase;
