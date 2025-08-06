export enum TourType {
  NONE = 'NONE',
  ISLAND_TOUR = 'ISLAND_TOUR',
  TRACKING = 'TRACKING',
  CULTURE = 'CULTURE',
  ACTIVITY = 'ACTIVITY',
  HEALING_TOUR = 'HEALING_TOUR',
  RECREATION_FOREST = 'RECREATION_FOREST'
}

export const TourTypeDescription = {
  [TourType.NONE]: '없음',
  [TourType.ISLAND_TOUR]: '섬 투어',
  [TourType.TRACKING]: '트래킹',
  [TourType.CULTURE]: '문화',
  [TourType.ACTIVITY]: '액티비티',
  [TourType.HEALING_TOUR]: '힐링 투어',
  [TourType.RECREATION_FOREST]: '휴양림'
} as const;

// 유틸리티 함수 - 문자열로 TourType 찾기
export const matchTourType = (target: string): TourType => {
  const found = Object.values(TourType).find(tourType => tourType === target);
  return found || TourType.NONE;
};