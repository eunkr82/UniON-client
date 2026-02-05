import type { ComponentPropsWithoutRef } from 'react';

import FieldBase from '../field-base';
import * as styles from '../field-base.css';

const TextField = (
  props: Omit<ComponentPropsWithoutRef<'input'>, 'children'>,
) => {
  return (
    <FieldBase>
      <input className={styles.control} {...props} />
    </FieldBase>
  );
};

export default TextField;
