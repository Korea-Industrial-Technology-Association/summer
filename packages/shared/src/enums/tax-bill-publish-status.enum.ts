export enum TaxBillPublishStatus {
  PUBLISHED = 'PUBLISHED',
  UN_PUBLISHED = 'UN_PUBLISHED'
}

export const TaxBillPublishStatusDescription = {
  [TaxBillPublishStatus.PUBLISHED]: '발행',
  [TaxBillPublishStatus.UN_PUBLISHED]: '미발행'
} as const;