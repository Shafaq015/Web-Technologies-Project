import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero-section">

      {/* TITLE */}
      <h1 className="hero-title">
        Cyberwing Trainings and Solutions
      </h1>

      {/* 3 CARDS */}
      <div className="container mt-5 pb-5">
        <div className="row justify-content-center">

          {/* CARD 1 */}
          <div className="col-md-4 mb-5">
            <div className="hero-card text-center">
              <img src="/images/icon.png" className="card-icon" alt="Training" />
              <h3 className="card-title">CYBERWING TRAININGS</h3>
              <p>
                Premier IT training institute offering a wide range of IT and Cybersecurity courses.
              </p>

              {/* Explore Button */}
              <Link to="/trainings">
                <button className="explore-btn">Explore More</button>
              </Link>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4 mb-5">
            <div className="hero-card text-center">
              <img src="/images/icon.png" className="card-icon" alt="Solutions" />
              <h3 className="card-title">CYBERWING SOLUTIONS</h3>
              <p>
                Our team of cybersecurity experts help businesses protect and secure their digital assets.
              </p>

              {/* Explore Button */}
              <Link to="/solutions">
                <button className="explore-btn">Explore More</button>
              </Link>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4 mb-5">
            <div className="hero-card text-center">
              <img src="/images/icon.png" className="card-icon" alt="Opentech" />
              <h3 className="card-title">OPENTECH TRAININGS</h3>
              <p>
                Comprehensive IT training programs delivered by industry-certified instructors.
              </p>

              {/* Explore Button */}
              <Link to="/opentech">
                <button className="explore-btn">Explore More</button>
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
