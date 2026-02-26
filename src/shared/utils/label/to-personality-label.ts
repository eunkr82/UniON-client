import {
  PERSONALITY_KEYS,
  PERSONALITY_LABEL_KO,
  type PersonalityDTO,
} from '@shared/constants/labels';

export const toPersonalityLabelsKo = (p: PersonalityDTO) => {
  return PERSONALITY_KEYS.filter((k) => p[k] === 1).map(
    (k) => PERSONALITY_LABEL_KO[k],
  );
};
