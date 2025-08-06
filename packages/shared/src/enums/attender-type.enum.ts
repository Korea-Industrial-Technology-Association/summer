export enum AttenderType {
  MAIN = 'MAIN',
  FAMILY = 'FAMILY'
}

export const AttenderTypeDescription = {
  [AttenderType.MAIN]: '주참가자',
  [AttenderType.FAMILY]: '동반참가자'
} as const;