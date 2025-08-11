import "./styles.css";
import {Link} from "react-router-dom";

const MyRegistration = () => {
  return (
    <div className="my-registration-container">
      <form className="my-registration-form">
        <div className="my-registration-title">
          참가자 정보 입력
        </div>
        <div className="form-group">
          <label htmlFor="phone"></label>
          <input type="tel" id="phone" name="phone" placeholder="휴대전화번호를 입력해주세요 (- 없이)" required/>
        </div>
        <div className="form-group">
          <label htmlFor="passowrd"></label>
          <input type="password" id="password" name="password" placeholder="비밀번호를 입력해주세요." required/>
        </div>
        <div className="form-group">
          <span>
            <Link to="/">비밀번호 찾기</Link>
          </span>
        </div>
        <button type="submit">확인</button>
      </form>
    </div>
  );
}

export default MyRegistration;
