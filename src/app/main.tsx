import '@shared/styles/index.ts';

import { ToastProvider } from '@shared/ui/components/toast/toast-provider.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import QueryProvider from './providers/api/query-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </QueryProvider>
  </StrictMode>,
);
