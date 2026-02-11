import { forwardRef } from 'react';

import * as styles from './write-textarea.css';

type WriteTextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'className'
>;

const WriteTextarea = forwardRef<HTMLTextAreaElement, WriteTextareaProps>(
  (props, ref) => {
    return <textarea ref={ref} className={styles.writeTextarea} {...props} />;
  },
);

export default WriteTextarea;
