import { ArrowIcon } from '@shared/assets';
import type { ReactNode } from 'react';

import { useDropdownContext } from './dropdown-context';
import * as styles from './dropdown-trigger.css';

export interface DropdownTriggerProps {
  label?: ReactNode;
  placeholder?: ReactNode;
}

const DropdownTrigger = ({ label, placeholder }: DropdownTriggerProps) => {
  const { open, setOpen, triggerId, panelId, triggerRef } =
    useDropdownContext();

  return (
    <button
      ref={triggerRef as unknown as React.RefObject<HTMLButtonElement>}
      id={triggerId}
      type='button'
      className={styles.base}
      aria-haspopup='listbox'
      aria-expanded={open}
      aria-controls={panelId}
      onClick={() => setOpen(!open)}
    >
      <span className={label ? styles.label : styles.placeholder}>
        {label || placeholder}
      </span>
      <div className={styles.iconSlot}>
        <ArrowIcon />
      </div>
    </button>
  );
};

export default DropdownTrigger;
