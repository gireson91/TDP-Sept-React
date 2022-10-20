import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import {
  Button, Col, Container, Nav, Row,
} from 'react-bootstrap';
import Poke from './Components/Data-Requests/Poke';
import Counter from './Components/States/Counter';
import OMDB from './Components/Data-Requests/OMDB';
import SearchableList from './Components/Lifting-State/SearchableList';
import Home from './Components/Routing/Home';
import Navigation from './Components/Routing/Navigation';
import ParamsExample from './Components/Routing/ParamsExample';
import People from './Components/Static-Data/People';
import FilmDetails from './Components/Routing/FilmDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Container>
            <Row>
              <Col>
                <Nav.Link href="/home">
                  Home
                </Nav.Link>
              </Col>
              <Col>
                <Link to="/liftingState">
                  <Button variant="primary" type="button">Lifting State</Button>
                </Link>
              </Col>
              <Col>
                <Link className="nav-link" to="/state">
                  State
                </Link>
              </Col>
              <Col>
                <Link to="/staticData">
                  Static Data
                </Link>
              </Col>
              <Col>
                <Link to="/dataRequests/example">
                  Data Req - Example
                </Link>
              </Col>
              <Col>
                <Link to="/filmSearch">
                  Film Search
                </Link>
              </Col>
              <Col lg={3}>
                <Navigation />
              </Col>
            </Row>
          </Container>

        </Nav>
        <br />
        <header>
          <h1>I AM A HEADER</h1>
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/state" element={<Counter />} />
          <Route path="/staticData" element={<People />} />
          <Route path="/liftingState" element={<SearchableList />} />
          <Route path="/dataRequests/example" element={<Poke />} />
          <Route path="/filmSearch" element={<OMDB />} />
          <Route path="/filmDetails/:id" element={<FilmDetails />} />
          <Route path="/params/:colour" element={<ParamsExample />} />
        </Routes>
        <footer>
          I AM A FOOTER
        </footer>
      </Router>
      {/* <Converter/> */}
      {/* <TrueFalse/> */}
    </div>
  );
}

export default App;
