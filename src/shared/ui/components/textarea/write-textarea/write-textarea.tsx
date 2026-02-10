import * as styles from './write-textarea.css';

type WriteTextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'className'
>;

const WriteTextarea = (props: WriteTextareaProps) => {
  return <textarea className={styles.writeTextarea} {...props} />;
};

export default WriteTextarea;
