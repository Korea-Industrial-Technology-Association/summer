import {
  AttendStatus,
  DepositStatus,
  FriendlyGroupName,
  FamilyRelation,
  AttenderType
} from '../enums';

// 기본 인터페이스
export interface IAttend {
  id: number;
  year: number;
  attendStatus: AttendStatus;
  depositStatus: DepositStatus;
  taxBillPublishStatus: TaxBillPublishStatus;
  friendlyGroups: FriendlyGroupName[];
  attenders: IAttender[];
  company: ICompany;
  adminCost?: IAdminCost;
  createdAt: string; // ISO string
  updatedAt: string;
}

export interface IAttender {
  id: number;
  familyGroupId?: number;
  attenderType: AttenderType;
  relation: FamilyRelation;
  koreanName: string;
  englishName?: string;
  juminNumber: string;
  mobilePhone: string;
  password?: string;
  isResetPassword?: boolean;
  telephone?: string;
  email: string;
  grade: string;
  isSameEduManagerAndAttender: boolean;
  eduManagerName?: string;
  eduManagerEmail?: string;
  eduManagerTelephone?: string;
  eduManagerMobilePhone?: string;
  eduManagerTeam?: string;
  eduManagerGrade?: string;
  isSameCalManagerAndEduManager: boolean;
  calManagerName?: string;
  calManagerEmail?: string;
  calManagerTelephone?: string;
  calManagerMobilePhone?: string;
  calManagerTeam?: string;
  calManagerGrade?: string;
  billingDate?: string; // ISO date string
  isReceiptIssue?: boolean;
  isBillingIssue?: boolean;
  issuanceType?: TaxBillIssuanceType;
}

export interface ICompany {
  id: number;
  companyName: string;
  companyBoss: string;
  companyBusinessNumber: string;
  companyAddress: string;
  companyDetailAddress?: string;
  companyZipcode: string;
  companyIndustry: string;
  companyCategory: string;
  businessRegistrationName?: string;
}

export interface IAdminCost {
  id: number;
  totalCost: number;
  attendCost: number;
  flightCost: number;
  hotelCost: number;
  tourCost: number;
  lectureCost: number;
  golfCost: number;
}

// Enum for tax bill
export enum TaxBillPublishStatus {
  UN_PUBLISHED = 'UN_PUBLISHED',
  PUBLISHED = 'PUBLISHED'
}

export enum TaxBillIssuanceType {
  RECEIPT = 'RECEIPT',
  BILLING = 'BILLING',
  NOT_ISSUE = 'NOT_ISSUE'
}

// Request 타입들
export interface CreateAttendRequest {
  friendlyGroups: FriendlyGroupName[];
  mainAttender: CreateMainAttenderRequest;
  company: CreateCompanyRequest;
  familyAttenders?: CreateFamilyAttenderRequest[][];
}

export interface CreateMainAttenderRequest {
  koreanName: string;
  password: string;
  englishName: string;
  juminNumber: string;
  telephone?: string;
  mobilePhone: string;
  email: string;
  grade: string;
  isSameEduManagerAndAttender: boolean;
  eduManagerName?: string;
  eduManagerEmail?: string;
  eduManagerTelephone?: string;
  eduManagerMobilePhone?: string;
  eduManagerTeam?: string;
  eduManagerGrade?: string;
  isSameCalManagerAndEduManager: boolean;
  calManagerName?: string;
  calManagerEmail?: string;
  calManagerTelephone?: string;
  calManagerMobilePhone?: string;
  calManagerTeam?: string;
  calManagerGrade?: string;
  billingDate?: string;
  isReceiptIssue?: boolean;
  isBillingIssue?: boolean;
  isNotIssue?: boolean;
}

export interface CreateFamilyAttenderRequest {
  relation: FamilyRelation;
  friendlyGroup?: FriendlyGroupName;
  name: string;
  juminNumber: string;
  phone: string;
}

export interface CreateCompanyRequest {
  companyName: string;
  companyBoss: string;
  companyBusinessNumber: string;
  companyAddress: string;
  companyDetailAddress?: string;
  companyZipcode: string;
  companyIndustry: string;
  companyCategory: string;
}

// Response 타입들
export interface AttendResponse {
  attendId: number;
  year: number;
  attendStatus: AttendStatus;
  attenderCount: number;
  friendlyGroups: FriendlyGroupName[];
  depositStatus: DepositStatus;
  taxBillPublishStatus: TaxBillPublishStatus;
  createdAt: string;
  updatedAt: string;
  mainAttender: AttenderResponse;
  familyAttenders: AttenderResponse[][];
  company: CompanyResponse;
}

export interface AttenderResponse {
  attenderId: number;
  koreanName: string;
  englishName?: string;
  telephone?: string;
  mobilePhone: string;
  email: string;
  grade: string;
  relation?: FamilyRelation;
}

export interface CompanyResponse {
  companyId: number;
  companyName: string;
  companyBoss: string;
  companyBusinessNumber: string;
  companyAddress: string;
  companyDetailAddress?: string;
  companyZipcode: string;
  companyIndustry: string;
  companyCategory: string;
  businessRegistrationName?: string;
}

// Update 타입들
export interface UpdateAttendRequest {
  friendlyGroups?: FriendlyGroupName[];
  mainAttender?: UpdateMainAttenderRequest;
  company?: UpdateCompanyRequest;
  familyAttenders?: UpdateFamilyAttenderRequest[][];
}

export interface UpdateMainAttenderRequest extends Omit<CreateMainAttenderRequest, 'password'> {
  password?: string;
}

export interface UpdateFamilyAttenderRequest extends CreateFamilyAttenderRequest {}

export interface UpdateCompanyRequest extends CreateCompanyRequest {}

// 검색 및 페이지네이션
export interface AttendSearchCondition {
  year?: number;
  keyword?: string;
  attendStatus?: AttendStatus;
  depositStatus?: DepositStatus;
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// API 응답 wrapper
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}