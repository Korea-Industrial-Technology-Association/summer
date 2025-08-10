import {BrowserRouter} from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
