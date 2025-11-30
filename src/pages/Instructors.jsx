import { Container, Row, Col, Card } from "react-bootstrap";
import instructorData from "../data/instructors.json";

function Instructors() {
  return (
    <>
      {/* HERO BANNER */}
      <div>
        <img
          src="/images/slider1.jpg"
          className="w-100"
          style={{ height: "350px", objectFit: "cover" }}
          alt="Instructors Banner"
        />
      </div>

      {/* PAGE TITLE */}
      <Container className="my-5">
        <h1 className="text-center fw-bold text-primary">Our Instructors</h1>

        <p className="text-center mt-2 text-muted">
          Meet our team of expert instructors who bring years of industry experience.
        </p>

        {/* INSTRUCTOR GRID */}
        <Row className="g-4 mt-4">
          {instructorData.map((inst) => (
            <Col md={3} key={inst.id}>
              <Card className="shadow-sm h-100 text-center">

                <Card.Img
                  variant="top"
                  src={inst.image}
                  style={{ height: "250px", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title className="fw-bold">{inst.name}</Card.Title>
                  <Card.Text className="text-muted">{inst.expertise}</Card.Text>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Instructors;
