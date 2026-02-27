import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

import FieldBase from '../field-base';
import * as styles from '../field-base.css';

const TextField = forwardRef<
  HTMLInputElement,
  Omit<ComponentPropsWithoutRef<'input'>, 'children'>
>((props, ref) => {
  return (
    <FieldBase>
      <input ref={ref} className={styles.control} {...props} />
    </FieldBase>
  );
});

export default TextField;
