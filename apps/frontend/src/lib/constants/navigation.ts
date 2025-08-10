export interface MenuItem {
  name: string;
  path: string;
}

// 헤더에 표시되는 주요 메뉴들
export const HEADER_MENU_ITEMS: MenuItem[] = [
  { name: '역대 하계포럼', path: 'forums' },
  { name: '공지사항', path: 'notices' },
  { name: '행사일정', path: 'events' },
  { name: '프로그램', path: 'programs' },
];

// 드롭다운에 표시되는 전체 메뉴들
export const DROPDOWN_MENU_ITEMS: MenuItem[] = [
  { name: '역대 하계포럼', path: 'forums' },
  { name: '공지사항', path: 'notices' },
  { name: '행사일정', path: 'events' },
  { name: '프로그램', path: 'programs' },
  { name: '강연·강좌', path: 'lectures' },
  { name: '갤러리', path: 'gallery' },
  { name: '참가신청', path: 'registration' },
  { name: '신청내역/수정', path: 'my-registration' },
  { name: '고객의 소리', path: 'feedback' },
  { name: '행사장 안내', path: 'venue-guide' },
  { name: 'FAQ', path: 'faq' },
];
