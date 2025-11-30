import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Trainings from "./pages/Trainings";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Instructors from "./pages/Instructors";
import Contact from "./pages/Contact";

function Layout({ children }) {
  const location = useLocation();

  // Hide Navbar + Footer ONLY on Homepage "/"
  const hideHeaderFooter = location.pathname === "/";

  return (
    <>
      {!hideHeaderFooter && <Navbar />}

      {children}

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
