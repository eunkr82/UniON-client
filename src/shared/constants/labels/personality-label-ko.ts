export const PERSONALITY_KEYS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
] as const;

export type PersonalityKey = (typeof PERSONALITY_KEYS)[number];

export type PersonalityDTO = Record<PersonalityKey, 0 | 1>;

export const PERSONALITY_LABEL_KO: Record<PersonalityKey, string> = {
  A: '성향 A(한글)',
  B: '성향 B(한글)',
  C: '성향 C(한글)',
  D: '성향 D(한글)',
  E: '성향 E(한글)',
  F: '성향 F(한글)',
  G: '성향 G(한글)',
  H: '성향 H(한글)',
  I: '성향 I(한글)',
  J: '성향 J(한글)',
  K: '성향 K(한글)',
  L: '성향 L(한글)',
  M: '성향 M(한글)',
  N: '성향 N(한글)',
  // TODO: 시트 생성 후 수정
};
