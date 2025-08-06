export enum GolfCourseName {
  NONE = 'NONE',
  ELYSIAN = 'ELYSIAN',
  BLACK_STONE = 'BLACK_STONE',
  LOTTE_SKY_HILL = 'LOTTE_SKY_HILL',
  EVERIS = 'EVERIS'
}

export const GolfCourseNameDescription = {
  [GolfCourseName.NONE]: '없음',
  [GolfCourseName.ELYSIAN]: '엘리시안',
  [GolfCourseName.BLACK_STONE]: '블랙스톤',
  [GolfCourseName.LOTTE_SKY_HILL]: '롯데 스카이힐',
  [GolfCourseName.EVERIS]: '에버리스'
} as const;

export const matchGolfCourseName = (target: string): GolfCourseName => {
  const found = Object.values(GolfCourseName).find(courseName => courseName === target);
  return found || GolfCourseName.NONE;
};