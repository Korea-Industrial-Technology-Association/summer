export enum AttendStatus {
  NONE = 'NONE',
  APPLYING = 'APPLYING',
  DONE = 'DONE',
  CANCELED = 'CANCELED'
}

export const AttendStatusDescription = {
  [AttendStatus.NONE]: '없음',
  [AttendStatus.APPLYING]: '신청중',
  [AttendStatus.DONE]: '신청완료',
  [AttendStatus.CANCELED]: '신청취소'
} as const;