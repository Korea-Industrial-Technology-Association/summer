import "./styles.css";
import {Footer, Header} from "../../components/common";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomPrevArrow from "../../components/Arrow/CustomPrevArrow.tsx";
import CustomNextArrow from "../../components/Arrow/CustomNextArrow.tsx";
import {useNavigate} from "react-router-dom";

const baseSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  prevArrow: <CustomPrevArrow/>,
  nextArrow: <CustomNextArrow/>,
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    }
  ]
}

const speakerSettings = {
  ...baseSettings,
  slidesToShow: 5,
  slidesToScroll: 3,
}

const gallerySettings = {
  ...baseSettings,
  slidesToShow: 3,
  slidesToScroll: 3,
}

const Home = () => {
  const navigate = useNavigate();

  const onClickRegistration = () => {
    navigate("/registration");
  };

  const onClickMyRegistration = () => {
    navigate("/my-registration");
  };

  return (
    <div className="home-page">
      <Header/>

      {/* Hero Section with Action Buttons */}
      <section className="home-section">
        <div className="home-content">
          <div className="action-buttons">
            <button className="action-button primary" onClick={onClickRegistration}>참가신청</button>
            <button className="action-button secondary" onClick={onClickMyRegistration}>신청내역/수정</button>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="speaker-section">
        <div className="speaker-carousel">
          <Slider {...speakerSettings}>
            <div>
              <div className="speaker-image">1</div>
              <div className="speaker-info">
                <h3>구자균 회장</h3>
                <span>한국산업기술진흥협회</span>
              </div>
            </div>
            <div>
              <div className="speaker-image">2</div>
              <div className="speaker-info">
                <h3>홍길동 이사</h3>
                <span>삼성전자</span>
              </div>
            </div>
            <div>
              <div className="speaker-image">3</div>
              <div className="speaker-info">
                <h3>김철수 대표</h3>
                <span>LG전자</span>
              </div>
            </div>
            <div>
              <div className="speaker-image">4</div>
              <div className="speaker-info">
                <h3>이영희 교수</h3>
                <span>서울대학교</span>
              </div>
            </div>
            <div>
              <div className="speaker-image">5</div>
              <div className="speaker-info">
                <h3>박민수 연구원</h3>
                <span>KAIST</span>
              </div>
            </div>
            <div>
              <div className="speaker-image">5</div>
              <div className="speaker-info">
                <h3>박민수 연구원</h3>
                <span>KAIST</span>
              </div>
            </div>
            <div>
              <div className="speaker-image">5</div>
              <div className="speaker-info">
                <h3>박민수 연구원</h3>
                <span>KAIST</span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="gallery-section">
        <div className="gallery-carousel">
          <Slider {...gallerySettings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
          </Slider>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
