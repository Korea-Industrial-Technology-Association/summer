import { useState } from "react";
import Table from "../components/common/Table";

interface NoticeItem {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
}

const Notice = () => {
  const [notices] = useState<NoticeItem[]>([
    {
      id: 1,
      title: "제31회 KOITA 기술경영인 하계포럼 협찬 안내",
      author: "관리자",
      date: "2025-05-21",
      views: 227
    },
    {
      id: 2,
      title: "제31회 KOITA 기술경영인 하계포럼 브로셔",
      author: "관리자",
      date: "2025-05-12",
      views: 371
    },
    {
      id: 3,
      title: "제31회 KOITA 기술경영인 하계포럼 프로그램 안내",
      author: "관리자",
      date: "2025-05-12",
      views: 350
    },
    {
      id: 4,
      title: "제31회 KOITA 기술경영인 하계포럼 참가안내",
      author: "관리자",
      date: "2025-05-12",
      views: 342
    }
  ]);

  const columns = [
    {
      key: 'id',
      title: '번호',
      width: '80px',
      align: 'center' as const
    },
    {
      key: 'title',
      title: '제목',
      align: 'left' as const,
      render: (value: string, record: NoticeItem) => (
        <a
          href={`/notices/${record.id}`}
          className="title-link"
          style={{
            color: '#333',
            textDecoration: 'none',
            display: 'block',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'rgb(255, 143, 17)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#333';
          }}
        >
          {value}
        </a>
      )
    },
    {
      key: 'author',
      title: '글쓴이',
      width: '100px',
      align: 'center' as const
    },
    {
      key: 'date',
      title: '등록일',
      width: '120px',
      align: 'center' as const
    },
    {
      key: 'views',
      title: '조회수',
      width: '80px',
      align: 'center' as const
    }
  ];

  return (
    <div className="notices-container">
      <Table
        columns={columns}
        data={notices}
        emptyText="등록된 공지사항이 없습니다."
      />
    </div>
  );
};

export default Notice;
