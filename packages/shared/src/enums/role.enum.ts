export enum Role {
  ANONYMOUS = 'ANONYMOUS',
  ATTENDER = 'ATTENDER',
  ADMIN = 'ADMIN',
  EXCEL_FLIGHT_ADMIN = 'EXCEL_FLIGHT_ADMIN',
  EXCEL_HOTEL_ADMIN = 'EXCEL_HOTEL_ADMIN'
}

export const RoleDescription = {
  [Role.ANONYMOUS]: '비회원',
  [Role.ATTENDER]: '참가자',
  [Role.ADMIN]: '관리자',
  [Role.EXCEL_FLIGHT_ADMIN]: '항공 관리자',
  [Role.EXCEL_HOTEL_ADMIN]: '숙박 관리자'
} as const;