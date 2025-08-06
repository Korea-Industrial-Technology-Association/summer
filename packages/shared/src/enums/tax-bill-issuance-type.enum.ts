export enum TaxBillIssuanceType {
  GET_PAID_NOW = 'GET_PAID_NOW',
  CREDIT = 'CREDIT',
  NONE = 'NONE'
}

export const TaxBillIssuanceTypeDescription = {
  [TaxBillIssuanceType.GET_PAID_NOW]: '영수발행',
  [TaxBillIssuanceType.CREDIT]: '청구발행',
  [TaxBillIssuanceType.NONE]: '미발행'
} as const;

// 유틸리티 함수 - Java의 findTaxBillIssuanceType 메서드 변환
export const findTaxBillIssuanceType = (
  isReceiptIssue?: boolean,
  isBillingIssue?: boolean,
  isNotIssue?: boolean
): TaxBillIssuanceType => {
  if (isReceiptIssue === true) {
    return TaxBillIssuanceType.GET_PAID_NOW;
  } else if (isBillingIssue === true) {
    return TaxBillIssuanceType.CREDIT;
  } else if (isNotIssue === true) {
    return TaxBillIssuanceType.NONE;
  }
  
  return TaxBillIssuanceType.NONE;
};