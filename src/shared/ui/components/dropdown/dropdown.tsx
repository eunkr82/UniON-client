import type { PropsWithChildren } from 'react';
import { useId, useMemo, useRef, useState } from 'react';
import { useCallback } from 'react';

import DropdownContext from './dropdown-context';

interface DropdownProps extends PropsWithChildren {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Dropdown = ({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
}: DropdownProps) => {
  const reactId = useId();
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const isControlled = open !== undefined;
  const [unControlledOpen, setUncontrolledOpen] = useState(defaultOpen);

  const openValue = isControlled ? open : unControlledOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  const close = useCallback(() => setOpen(false), [setOpen]);
  const toggle = useCallback(() => setOpen(!openValue), [setOpen, openValue]);

  const triggerId = `dropdown-trigger-${reactId}`;
  const panelId = `dropdown-panel-${reactId}`;

  const contextValue = useMemo(
    () => ({
      open: openValue,
      setOpen,
      close,
      toggle,
      triggerId,
      panelId,
      triggerRef,
    }),
    [close, openValue, panelId, setOpen, toggle, triggerId],
  );

  return (
    <DropdownContext.Provider value={contextValue}>
      {children}
    </DropdownContext.Provider>
  );
};

export default Dropdown;
