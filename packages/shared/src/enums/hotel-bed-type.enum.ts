export enum HotelBedType {
  NONE = 'NONE',
  TWIN = 'TWIN',
  DOUBLE = 'DOUBLE'
}

export const HotelBedTypeDescription = {
  [HotelBedType.NONE]: '없음',
  [HotelBedType.TWIN]: '트윈',
  [HotelBedType.DOUBLE]: '더블'
} as const;