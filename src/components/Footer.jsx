import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5 className="text-info fw-bold">CYBERWING</h5>
            <p>
              Leading IT training & cybersecurity solutions provider in Lahore, Pakistan.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="text-info fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/trainings" className="text-light text-decoration-none">Trainings</a></li>
              <li><a href="/courses" className="text-light text-decoration-none">Courses</a></li>
              <li><a href="/instructors" className="text-light text-decoration-none">Instructors</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="text-info fw-bold">Contact</h5>
            <p>📍 Kalma Chowk, Lahore</p>
            <p>📞 +92 303 6117111</p>
            <p>📧 info@cyberwing.pk</p>
          </div>

        </div>

        <hr className="border-secondary" />
        <p className="text-center small mb-0">
          © 2025 Cyberwing.pk — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
