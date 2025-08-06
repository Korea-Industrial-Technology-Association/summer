export enum FamilyGroupType {
  MAIN = 'MAIN',
  STAFF = 'STAFF'
}

export const FamilyGroupTypeDescription = {
  [FamilyGroupType.MAIN]: '대표',
  [FamilyGroupType.STAFF]: '직원'
} as const;