import type { ComponentPropsWithoutRef } from 'react';

import FieldBase from '../field-base';

const TextField = (
  props: Omit<ComponentPropsWithoutRef<'input'>, 'children'>,
) => {
  return (
    <FieldBase>
      <input {...props} />
    </FieldBase>
  );
};

export default TextField;
