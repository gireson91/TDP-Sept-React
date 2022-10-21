import {
  Col, Container, Nav, Row,
} from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function Testing() {
  return (
    <Container>
      <Row>
        <Nav>
          <Col>
            <Link className="nav-link" to="ex1">
              Exercise 1
            </Link>
          </Col>
          <Col>
            <Link className="nav-link" to="ex2">
              Exercise 2
            </Link>
          </Col>
          <Col>
            <Link className="nav-link" to="ex3">
              Exercise 3
            </Link>
          </Col>
        </Nav>
      </Row>
      <Outlet />
    </Container>
  );
}

export default Testing;
