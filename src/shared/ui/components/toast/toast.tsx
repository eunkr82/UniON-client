import type { ReactNode } from 'react';

import * as styles from './toast.css';

interface ToastViewProps {
  icon: ReactNode;
  message: string;
}

const Toast = ({ icon, message }: ToastViewProps) => {
  return (
    <div className={styles.toastViewport}>
      <div className={styles.toastContainer}>
        {icon ? <span className={styles.icon}>{icon}</span> : null}
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default Toast;
