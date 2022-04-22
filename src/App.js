///import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./stylesheets/Home.css";
import "./stylesheets/Header-Footer.css";
import "./stylesheets/Projects.css";
import "./stylesheets/ImageSlider.css";
import "./stylesheets/Carousel.css";
import "./stylesheets/DemoVideo.css";

// you can also use <link> for styles//..
import "aos/dist/aos.css";
import AOS from "aos";
// this for the scolling animation
AOS.init({
  duration: 500,
});

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
