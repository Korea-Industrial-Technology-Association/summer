export enum LectureType {
  NONE = 'NONE',
  KEY_NOTE_LECTURE = 'KEY_NOTE_LECTURE',
  TECH = 'TECH',
  HISTORY_TRIP = 'HISTORY_TRIP',
  SCIENCE = 'SCIENCE',
  LIFE_PHILOSOPHY = 'LIFE_PHILOSOPHY',
  INVESTMENT = 'INVESTMENT',
  PSYCHOLOGY_HAPPY = 'PSYCHOLOGY_HAPPY',
  MANAGEMENT = 'MANAGEMENT',
  ART = 'ART',
  MUSIC = 'MUSIC',
  MENTAL_HEALTH = 'MENTAL_HEALTH',
  ORGANIZATIONAL_CULTURE = 'ORGANIZATIONAL_CULTURE',
  INVITATIONAL_LECTURE = 'INVITATIONAL_LECTURE',
  TREND = 'TREND',
  HEALTH = 'HEALTH',
  LIFE = 'LIFE',
  LAW = 'LAW',
  INTEGRATED_LECTURE = 'INTEGRATED_LECTURE'
}

export const LectureTypeDescription = {
  [LectureType.NONE]: '[문학]',
  [LectureType.KEY_NOTE_LECTURE]: '[기조 강연]',
  [LectureType.TECH]: '[기술]',
  [LectureType.HISTORY_TRIP]: '[사회]',
  [LectureType.SCIENCE]: '[과학]',
  [LectureType.LIFE_PHILOSOPHY]: '[역사/철학]',
  [LectureType.INVESTMENT]: '[재테크]',
  [LectureType.PSYCHOLOGY_HAPPY]: '[심리/행복]',
  [LectureType.MANAGEMENT]: '[경영]',
  [LectureType.ART]: '[예술]',
  [LectureType.MUSIC]: '[음악]',
  [LectureType.MENTAL_HEALTH]: '[교육]',
  [LectureType.ORGANIZATIONAL_CULTURE]: '[조직문화]',
  [LectureType.INVITATIONAL_LECTURE]: '[초청강연]',
  [LectureType.TREND]: '[트렌드]',
  [LectureType.HEALTH]: '[건강]',
  [LectureType.LIFE]: '[생활]',
  [LectureType.LAW]: '[법률]',
  [LectureType.INTEGRATED_LECTURE]: '[통합강연]'
} as const;

// 유틸리티 함수 - 대괄호 제거
export const getNoneBrackets = (lectureType: LectureType): string => {
  const description = LectureTypeDescription[lectureType];
  return description.substring(1, description.length - 1);
};