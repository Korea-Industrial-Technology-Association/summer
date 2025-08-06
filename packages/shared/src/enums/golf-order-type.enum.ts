export enum GolfOrderType {
  NONE = 'NONE',
  ACTIVE = 'ACTIVE',
  STANDBY = 'STANDBY'
}

export const GolfOrderTypeDescription = {
  [GolfOrderType.NONE]: '없음',
  [GolfOrderType.ACTIVE]: '참가',
  [GolfOrderType.STANDBY]: '대기'
} as const;