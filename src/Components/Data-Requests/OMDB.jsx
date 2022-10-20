import axios from 'axios';
import { useState } from 'react';
import Film from './Film';

import CONSTS from '../../consts.json';

function OMDB() {
  const [title, setTitle] = useState('');
  const [films, setFilms] = useState([]);

  const searchFilms = async () => {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${CONSTS.API_KEY}&s=${title}`);
    console.log('RES:', res);
    setFilms(res.data.Search);
  };

  return (
    <label htmlFor="movieTitle">
      Title:
      <input id="movieTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="button" onClick={searchFilms}>SEARCH</button>
      {
        films.map((film) => (
          <Film
            key={film.imdbID}
            id={film.imdbID}
            title={film.Title}
            year={film.Year}
            poster={film.Poster}
            details
          />
        ))
      }
    </label>
  );
}

export default OMDB;
