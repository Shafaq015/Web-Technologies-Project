import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Trainings() {
  // ==========================
  // COURSE DATA (Edit Easily)
  // ==========================
 const courses = [
  { title: "Cybersecurity (Blue Team / SOC Analyst)",img: "course1.png" },
  { title: "Ethical Hacking (Red Team)", img: "course2.jpg" },
  { title: "Networking (CCNA)", img: "course3.jpg" },
  { title: "Linux Administration", img: "course4.jpg" },
  { title: "DevOps Engineer", img: "course5.png" },
  { title: "Cloud Engineer (AWS / Azure)", img: "course6.png" },
  { title: "Python Programming", img: "course7.jpg" },
  { title: "Digital Forensics", img: "course8.jpg" },
  { title: "Mobile Application Security", img: "course9.jpg" }
];


  // ==========================
  // INSTRUCTORS DATA
  // ==========================
  const instructors = [
    { name: "Muneeba Qureshi", expertise: "Cybersecurity Expert", img: "instructor1.jpg" },
    { name: "Bilal Khan", expertise: "Networking Specialist", img: "instructor2.jpg" },
    { name: "Nimra Khan", expertise: "Linux & DevOps", img: "instructor3.jpg" },
    { name: "Hamza Qureshi", expertise: "Cloud Engineer", img: "instructor4.jpg" }
  ];

  return (
    <>
      {/* TOP BANNER */}
      <div>
        <img
          src="/images/hero.jpg"
          className="w-100"
          alt="Cyberwing Training Banner"
          style={{ height: "380px", objectFit: "cover" }}
        />
      </div>

      {/* ========================== */}
      {/* ABOUT TRAININGS SECTION */}
      {/* ========================== */}
      <Container className="my-5">
        <h2 className="fw-bold text-primary text-center mb-4">
          Cyberwing IT Trainings
        </h2>

        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="/campus/campus1.jpg"
              className="w-100 rounded shadow"
              alt="Cyberwing Campus"
            />
          </Col>

          <Col md={6}>
            <h3 className="fw-bold text-primary">Why Cyberwing?</h3>
            <p className="mt-3">
              Cyberwing.pk is a leading IT training institute in Lahore offering
              hands-on training in Cybersecurity, Networking, Cloud, Linux,
              DevOps, Programming, and Digital Forensics.
            </p>

            <ul>
              <li>Certified trainers</li>
              <li>Hands-on practical labs</li>
              <li>Latest course material</li>
              <li>Career guidance & internship support</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* ========================== */}
      {/* COURSES SECTION */}
      {/* ========================== */}
      <Container className="my-5">
        <h2 className="fw-bold text-primary text-center">Our Courses</h2>
        <p className="text-center text-muted mb-4">
          Explore our professional IT training programs.
        </p>

        <Row className="g-4">
          {courses.map((c, index) => (
            <Col md={4} key={index}>
              <Card className="shadow h-100 text-center p-3">

                {/* COURSE IMAGE */}
                <img
                  src={`/courses/${c.img}`}
                  height="150"
                  className="rounded mb-3"
                  style={{ objectFit: "cover", width: "100%" }}
                  alt={c.title}
                />

                {/* TITLE */}
                <h5 className="fw-bold">{c.title}</h5>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ========================== */}
      {/* INSTRUCTORS SECTION */}
      {/* ========================== */}
      <Container className="my-5">
        <h2 className="fw-bold text-primary text-center">Our Instructors</h2>
        <p className="text-center text-muted mb-4">
          Meet our certified and experienced trainers.
        </p>

        <Row className="g-4">
          {instructors.map((inst, index) => (
            <Col md={3} key={index}>
              <Card className="shadow h-100 text-center">

                <img
                  src={`/instructors/${inst.img}`}
                  alt={inst.name}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />

                <Card.Body>
                  <h5 className="fw-bold">{inst.name}</h5>
                  <p className="text-muted">{inst.expertise}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ========================== */}
      {/* CONTACT FORM */}
      {/* ========================== */}
      <Container className="my-5">
        <h2 className="fw-bold text-primary text-center">Have a Question?</h2>
        <p className="text-center text-muted mb-4">
          Contact us and we will respond soon.
        </p>

        <Row className="justify-content-center">
          <Col md={6}>
            <Form className="shadow p-4 rounded bg-light">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="example@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>

              <Button className="w-100 btn-dark">Send Inquiry</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Trainings;
