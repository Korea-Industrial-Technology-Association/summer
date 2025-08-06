export enum Gender {
  UNKNOWN = 'UNKNOWN',
  FEMALE = 'FEMALE',
  MALE = 'MALE'
}

export const GenderDescription = {
  [Gender.UNKNOWN]: '알 수 없음',
  [Gender.FEMALE]: '여',
  [Gender.MALE]: '남'
} as const;