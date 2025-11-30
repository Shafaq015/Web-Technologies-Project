import { Container, Row, Col, Card, Button } from "react-bootstrap";
import courseData from "../data/courses.json";

function Courses() {
  return (
    <>
      {/* ─────────────────────────────
          HERO IMAGE FOR COURSES
      ───────────────────────────── */}
      <div>
        <img
          src="/images/slider2.jpg"
          className="w-100"
          style={{ height: "350px", objectFit: "cover" }}
          alt="Courses Banner"
        />
      </div>

      {/* ─────────────────────────────
          ALL COURSES TITLE
      ───────────────────────────── */}
      <Container className="my-5">
        <h1 className="text-center fw-bold text-primary">Our Courses</h1>
        <p className="text-center mt-2 text-muted">
          Explore industry-leading IT courses designed to upgrade your skills.
        </p>

        {/* ─────────────────────────────
            COURSES GRID
        ───────────────────────────── */}
        <Row className="g-4 mt-4">
          {courseData.map((course) => (
            <Col md={4} key={course.id}>
              <Card className="shadow-sm h-100">

                <Card.Img
                  variant="top"
                  src={course.image}
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title className="fw-bold">{course.title}</Card.Title>

                  <Card.Text>{course.desc}</Card.Text>

                  <Button variant="dark">View Details</Button>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Courses;
