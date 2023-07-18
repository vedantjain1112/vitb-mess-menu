import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import ShowMenu from "./components/ShowMenu";
import Footer from "./components/footer";
import Home from "./components/Home";
import ShowMenu1 from "./components/ShowMenu1";
import Menu from "./components/Menu";
import Canteen from "./components/Canteen";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/showmenu" element={<ShowMenu />} />
            <Route exact path="/showmenu1" element={<ShowMenu1 />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/canteen" element={<Canteen />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
