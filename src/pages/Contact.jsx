import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <>
      {/* ─────────────────────────────
          HERO BANNER
      ───────────────────────────── */}
      <div>
        <img
          src="/images/slider2.jpg"
          className="w-100"
          style={{ height: "350px", objectFit: "cover" }}
          alt="Contact Banner"
        />
      </div>

      {/* ─────────────────────────────
          CONTACT CONTENT
      ───────────────────────────── */}
      <Container className="my-5">

        <h1 className="text-center fw-bold text-primary">Contact Us</h1>
        <p className="text-center text-muted mb-5">
          We’d love to hear from you! Reach out to us anytime.
        </p>

        <Row className="g-4">

          {/* LEFT SIDE — CONTACT INFO */}
          <Col md={5}>
            <h3 className="fw-bold text-primary">Get in Touch</h3>

            <p className="mt-3">
              📍 <b>Cyberwing Trainings</b>  
              <br />
              Kalma Chowk, Lahore, Pakistan
            </p>

            <p className="mt-3">
              📞 +92 303 611 7111  
              <br />
              📞 +92 304 611 7111  
              <br />
              📞 +92 305 611 7111
            </p>

            <p className="mt-3">
              ✉ <b>info@cyberwing.pk</b>
            </p>
          </Col>

          {/* RIGHT SIDE — CONTACT FORM */}
          <Col md={7}>
            <Form className="shadow-sm p-4 rounded bg-light">

              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message here..." />
              </Form.Group>

              <Button variant="dark" size="lg" className="w-100">
                Send Message
              </Button>

            </Form>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Contact;
