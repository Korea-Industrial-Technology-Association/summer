export enum FamilyRelation {
  NONE = 'NONE',
  ME = 'ME',
  SPOUSE = 'SPOUSE',
  PARENTS = 'PARENTS',
  CHILD = 'CHILD',
  RELATIVE = 'RELATIVE',
  STAFF = 'STAFF',
  GRAND_CHILD = 'GRAND_CHILD',
  ETC = 'ETC'
}

export const FamilyRelationDescription = {
  [FamilyRelation.NONE]: '없음',
  [FamilyRelation.ME]: '본인',
  [FamilyRelation.SPOUSE]: '배우자',
  [FamilyRelation.PARENTS]: '부모',
  [FamilyRelation.CHILD]: '자녀',
  [FamilyRelation.RELATIVE]: '친척',
  [FamilyRelation.STAFF]: '직원',
  [FamilyRelation.GRAND_CHILD]: '손자녀',
  [FamilyRelation.ETC]: '기타'
} as const;