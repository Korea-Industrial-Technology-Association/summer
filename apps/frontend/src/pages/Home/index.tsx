import "./styles.css";
import {Footer, Header} from "../../components/common";

const Home = () => {
  return (
    <div className="home-page">
      <Header/>

      {/* Hero Section with Action Buttons */}
      <section className="home-section">
        <div className="home-content">
          <div className="action-buttons">
            <button className="action-button primary">참가신청</button>
            <button className="action-button secondary">신청내역/수정</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="speaker-section">
        <div className="speaker-carousel">

        </div>
      </section>
      <section>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
