import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Books from "./components/Books/Books";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/books" element={<Books />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
