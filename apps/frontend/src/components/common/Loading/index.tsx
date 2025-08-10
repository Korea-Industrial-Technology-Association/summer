import "./styles.css";

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  overlay?: boolean;
}

const Loading = ({ 
  size = 'medium', 
  text = '로딩 중...', 
  overlay = false 
}: LoadingProps) => {
  const content = (
    <div className={`loading loading--${size}`}>
      <div className="loading-spinner"></div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );

  if (overlay) {
    return (
      <div className="loading-overlay">
        {content}
      </div>
    );
  }

  return content;
};

export default Loading;
