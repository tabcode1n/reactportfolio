import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Nav from "./components/Nav.jsx";
// import layout from "./layout.jsx";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
    </>
  );
};

export default App;
