import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import ProjectList from "./component/ProjectList";
import Contact from "./component/Contact";
import ProjectDetail from "./component/ProjectDetail";
import Footer from "./component/Footer";
import Experience from "./component/Experience";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Experience" element={<Experience />} />
            <Route exact path="/Projects" element={<ProjectList />} />
            <Route path="/ProjectDetail/:id" element={<ProjectDetail />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
