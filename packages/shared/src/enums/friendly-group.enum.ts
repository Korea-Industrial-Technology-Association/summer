export enum FriendlyGroupName {
  NONE = 'NONE',
  CEO = 'CEO',
  CTO = 'CTO',
  NEW_CTO = 'NEW_CTO',
  EXECUTIVE = 'EXECUTIVE',
  NRDC = 'NRDC',
  NET = 'NET',
  CHUNGCHEONG = 'CHUNGCHEONG',
  HONAM = 'HONAM',
  BUG = 'BUG',
  DAEGU_GYEONGBUK = 'DAEGU_GYEONGBUK'
}

export const FriendlyGroupDescription = {
  [FriendlyGroupName.NONE]: '없음',
  [FriendlyGroupName.CEO]: 'CEO',
  [FriendlyGroupName.CTO]: 'CTO',
  [FriendlyGroupName.NEW_CTO]: '차세대 CTO',
  [FriendlyGroupName.EXECUTIVE]: '임원사',
  [FriendlyGroupName.NRDC]: '전소협',
  [FriendlyGroupName.NET]: 'NET',
  [FriendlyGroupName.CHUNGCHEONG]: '충청',
  [FriendlyGroupName.HONAM]: '호남',
  [FriendlyGroupName.BUG]: '부울경',
  [FriendlyGroupName.DAEGU_GYEONGBUK]: '대구경북'
} as const;