export interface MenuItem {
  name: string;
  path: string;
}

// 헤더에 표시되는 주요 메뉴들
export const HEADER_MENU_ITEMS: MenuItem[] = [
  { name: '역대 하계포럼', path: '/' },
  { name: '공지사항', path: '/' },
  { name: '행사일정', path: '' },
  { name: '프로그램', path: '' },
];

// 드롭다운에 표시되는 전체 메뉴들
export const DROPDOWN_MENU_ITEMS: MenuItem[] = [
  { name: '역대 하계포럼', path: '/' },
  { name: '공지사항', path: '/' },
  { name: '행사일정', path: '' },
  { name: '프로그램', path: '' },
  { name: '강연·강좌', path: '' },
  { name: '갤러리', path: '' },
  { name: '참가신청', path: '' },
  { name: '신청내역/수정', path: '' },
  { name: '고객의 소리', path: '' },
  { name: '행사장 안내', path: '' },
  { name: 'FAQ', path: '' },
];