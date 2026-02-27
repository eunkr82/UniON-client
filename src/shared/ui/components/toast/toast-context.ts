import { createContext, useContext } from 'react';

export interface ToastActions {
  success: (message: string) => void;
  error: (message: string) => void;
}

export const ToastContext = createContext<ToastActions | null>(null);

export const useToast = (): ToastActions => {
  const ctx = useContext(ToastContext);
  if (ctx === null) {
    throw new Error('useToast는 ToastProvider 안에서만 사용할 수 있어요.');
  }
  return ctx;
};
