export enum LeavingType {
  DEPARTURE = 'DEPARTURE',
  RETURN = 'RETURN'
}

export const LeavingTypeDescription = {
  [LeavingType.DEPARTURE]: '가는 편',
  [LeavingType.RETURN]: '오는 편'
} as const;