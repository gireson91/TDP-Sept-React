import axios from 'axios';
import { useState } from 'react';
import {
  Button, Col, Container, Form,
} from 'react-bootstrap';
import Film from './Film';

import CONSTS from '../../consts.json';

function OMDB() {
  const [title, setTitle] = useState('');
  const [films, setFilms] = useState([]);

  const searchFilms = async (event) => {
    event.preventDefault();
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${CONSTS.API_KEY}&s=${title}`);
    console.log('RES:', res);
    setFilms(res.data.Search);
  };

  return (
    <>
      <Form>
        <Form.Group controlId="filmTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={searchFilms}>SEARCH</Button>
      </Form>
      <Container>
        <div className="row row-cols-3 g-4">
          {
          films.map((film) => (
            <Col>
              <Film
                key={film.imdbID}
                id={film.imdbID}
                title={film.Title}
                year={film.Year}
                poster={film.Poster}
                details
              />
            </Col>
          ))
      }
        </div>
      </Container>

    </>
  );
}

export default OMDB;
