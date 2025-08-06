export enum KoitaFileType {
  BUSINESS_REGISTRATION = 'BUSINESS_REGISTRATION',
  COPY_OF_BANKBOOK = 'COPY_OF_BANKBOOK',
  BROCHURE = 'BROCHURE',
  OFFICIAL_LETTER = 'OFFICIAL_LETTER'
}

export const KoitaFileTypeDescription = {
  [KoitaFileType.BUSINESS_REGISTRATION]: '사업자등록증',
  [KoitaFileType.COPY_OF_BANKBOOK]: '통장사본',
  [KoitaFileType.BROCHURE]: '브로셔',
  [KoitaFileType.OFFICIAL_LETTER]: '공문'
} as const;