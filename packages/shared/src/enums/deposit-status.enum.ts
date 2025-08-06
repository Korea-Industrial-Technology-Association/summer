export enum DepositStatus {
  NON_PAY = 'NON_PAY',
  FULL_PAY = 'FULL_PAY'
}

export const DepositStatusDescription = {
  [DepositStatus.NON_PAY]: '미납',
  [DepositStatus.FULL_PAY]: '완납'
} as const;