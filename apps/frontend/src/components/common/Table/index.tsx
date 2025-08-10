import "./styles.css";

interface Column {
  key: string;
  title: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, record: any) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  data: any[];
  loading?: boolean;
  emptyText?: string;
}

const Table = ({ 
  columns, 
  data, 
  loading = false, 
  emptyText = '데이터가 없습니다.' 
}: TableProps) => {
  if (loading) {
    return (
      <div className="table-loading">
        <div className="loading-spinner"></div>
        <p>데이터를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{ 
                  width: column.width,
                  textAlign: column.align || 'center'
                }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((record, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    style={{ textAlign: column.align || 'center' }}
                  >
                    {column.render 
                      ? column.render(record[column.key], record)
                      : record[column.key]
                    }
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="empty-cell">
                {emptyText}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
