export enum AttenderAge {
  ATTENDER = 'ATTENDER',
  UNDER_19_YEARS = 'UNDER_19_YEARS',
  UNDER_13_YEARS = 'UNDER_13_YEARS',
  PRESCHOOLER = 'PRESCHOOLER'
}

export const AttenderAgeDescription = {
  [AttenderAge.ATTENDER]: '참가자',
  [AttenderAge.UNDER_19_YEARS]: '19세 미만',
  [AttenderAge.UNDER_13_YEARS]: '13세 미만',
  [AttenderAge.PRESCHOOLER]: '미취학아동'
} as const;