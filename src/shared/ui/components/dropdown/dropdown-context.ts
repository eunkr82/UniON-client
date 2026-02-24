import type { RefObject } from 'react';
import { createContext, useContext } from 'react';

export interface DropdownContextValue {
  open: boolean;
  setOpen: (next: boolean) => void;
  close: () => void;
  triggerId: string;
  panelId: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      'Dropdown.*는 Dropdown 컴포넌트 내부에서만 사용할 수 있습니다.',
    );
  }
  return context;
};

export default DropdownContext;
