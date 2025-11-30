import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => (location.pathname === path ? "text-info fw-bold" : "");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
      <Link className="navbar-brand fw-bold text-info" to="/">
        CYBERWING
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <Link className={`nav-link ${isActive("/")}`} to="/">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className={`nav-link ${isActive("/trainings")}`} to="/trainings">Trainings</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className={`nav-link ${isActive("/courses")}`} to="/courses">Courses</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className={`nav-link ${isActive("/instructors")}`} to="/instructors">Instructors</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className={`nav-link ${isActive("/about")}`} to="/about">About</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className={`nav-link ${isActive("/contact")}`} to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
