import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// IMPORTANT: DO NOT IMPORT FROM PUBLIC
// Public folder images must be used with absolute paths

function About() {
  return (
    <>
      {/* HERO BANNER */}
      <div>
        <img
          src="/images/bg-pattern.png"   // <-- Correct path
          className="w-100"
          style={{ height: "350px", objectFit: "cover" }}
          alt="About Banner"
        />
      </div>

      {/* ABOUT CYBERWING */}
      <Container className="my-5">
        <h1 className="text-center fw-bold text-primary">About Cyberwing</h1>

        <p className="text-center mt-2 text-muted mb-5">
          Your trusted destination for advanced IT education and professional training.
        </p>

        <Row className="align-items-center">

          {/* LEFT CAMPUS IMAGE */}
          <Col md={6}>
            <img
              src="/campus/campus1.jpg"   // <-- Correct path
              className="w-100 rounded shadow"
              alt="Cyberwing Campus"
            />
          </Col>

          {/* RIGHT SIDE TEXT */}
          <Col md={6}>
            <h2 className="fw-bold text-primary mt-3">Who We Are</h2>

            <p className="mt-3">
              Cyberwing is an advanced IT training institute offering industry-recognized
              courses in Cybersecurity, DevOps, Networking, Cloud Computing, Ethical Hacking,
              and more. Our focus is on practical, real-world learning.
            </p>

            <p>
              We provide state-of-the-art labs, experienced instructors, and hands-on teaching
              that ensures students gain real-world skills demanded in today's tech-driven world.
            </p>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default About;
