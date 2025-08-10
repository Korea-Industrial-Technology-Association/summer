import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";

// Pages
import Home from "./pages/Home";
import Forums from "./pages/Forums";
import Notice from "./pages/Notice";
import Events from "./pages/Events";
import Programs from "./pages/Programs";
import Lectures from "./pages/Lectures";
import Gallery from "./pages/Gallery";
import Registration from "./pages/Registration";
import MyRegistration from "./pages/MyRegistration";
import Feedback from "./pages/Feedback";
import VenueGuide from "./pages/VenueGuide";
import FAQ from "./pages/FAQ";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈페이지는 특별한 레이아웃을 가질 수 있음 */}
        <Route path="/" element={<Home />} />

        {/* 나머지 페이지들은 공통 Layout 사용 */}
        <Route path="/forums" element={
          <Layout title="역대 하계포럼" showYearFilter>
            <Forums />
          </Layout>
        } />

        <Route path="/notices" element={
          <Layout title="공지사항">
            <Notice />
          </Layout>
        } />

        <Route path="/events" element={
          <Layout title="행사일정" showYearFilter>
            <Events />
          </Layout>
        } />

        <Route path="/programs" element={
          <Layout title="프로그램" showYearFilter>
            <Programs />
          </Layout>
        } />

        <Route path="/lectures" element={
          <Layout title="강연·강좌">
            <Lectures />
          </Layout>
        } />

        <Route path="/gallery" element={
          <Layout title="갤러리">
            <Gallery />
          </Layout>
        } />

        <Route path="/registration" element={
          <Layout title="참가신청">
            <Registration />
          </Layout>
        } />

        <Route path="/my-registration" element={
          <Layout title="신청내역/수정">
            <MyRegistration />
          </Layout>
        } />

        <Route path="/feedback" element={
          <Layout title="고객의 소리">
            <Feedback />
          </Layout>
        } />

        <Route path="/venue-guide" element={
          <Layout title="행사장 안내">
            <VenueGuide />
          </Layout>
        } />

        <Route path="/faq" element={
          <Layout title="FAQ">
            <FAQ />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
