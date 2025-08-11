import "./styles.css";

const Feedback = () => {
  return <div className="feedback-container">
    <form className="feedback-form">
      <div className="form-group">
        <label htmlFor="name">제목</label>
        <input type="text" id="name" name="name" required/>
      </div>
      <div className="form-group">
        <label htmlFor="content">내용</label>
        <textarea className="form-content" id="content" name="content" placeholder="요청사항을 입력해주세요." required></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="message">성명</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="company">소속</label>
        <textarea id="company" name="company" required></textarea>
      </div>
      <button type="submit">보내기</button>
    </form>
  </div>;
}

export default Feedback;
