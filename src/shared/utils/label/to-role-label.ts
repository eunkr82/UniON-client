import { ROLE_LABEL_KO } from '@shared/constants/labels';

export const toRoleLabelKo = (raw: string) => ROLE_LABEL_KO[raw] ?? raw;
