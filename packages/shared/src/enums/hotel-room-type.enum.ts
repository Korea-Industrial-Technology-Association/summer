export enum HotelRoomType {
  NONE = 'NONE',
  LOTTE_DELUXE_MOUNTAIN = 'LOTTE_DELUXE_MOUNTAIN',
  LOTTE_DELUXE_GARDEN = 'LOTTE_DELUXE_GARDEN',
  LOTTE_CHARLOTTE_OCEAN = 'LOTTE_CHARLOTTE_OCEAN',
  LOTTE_PREMIER_OCEAN = 'LOTTE_PREMIER_OCEAN'
}

export const HotelRoomTypeDescription = {
  [HotelRoomType.NONE]: '없음',
  [HotelRoomType.LOTTE_DELUXE_MOUNTAIN]: '디럭스 마운틴',
  [HotelRoomType.LOTTE_DELUXE_GARDEN]: '디럭스 가든',
  [HotelRoomType.LOTTE_CHARLOTTE_OCEAN]: '샤롯데 오션',
  [HotelRoomType.LOTTE_PREMIER_OCEAN]: '프리미어 오션'
} as const;

// 유틸리티 함수 - 문자열로 HotelRoomType 찾기
export const matchHotelRoomType = (target: string): HotelRoomType => {
  const found = Object.values(HotelRoomType).find(roomType => roomType === target);
  return found || HotelRoomType.NONE;
};