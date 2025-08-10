import "./styles.css";

const Footer = () => {
  return <footer className="Footer">
    <div className="footer_wrapper">
      <div className="left_child footer_logo">
        <img src="/footer-logo.png" alt="footer-logo"/>
      </div>
      <div className="right_child">
        <p className="right_child">(사)한국산업기술진흥협회 · 대표자 구자균 · 사업자등록번호 220-82-00051 · 통신판매번호 서초 제09539 · 대표번호 02-3460-9114
          <br/>
          COPYRIGHT ⓒ2020 Korea Industrial Technology Association all rights reserved.
        </p>
        <p className="left_child">
          <span>개인정보처리방침</span>
          <a href="/" target="_blank">관리자 페이지</a>
        </p>
      </div>
    </div>
  </footer>
}

export default Footer;
