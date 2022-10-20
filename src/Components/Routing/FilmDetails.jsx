import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CONSTS from '../../consts.json';
import Film from '../Data-Requests/Film';

function FilmDetails() {
  const [film, setFilm] = useState();

  const { id } = useParams();

  useEffect(() => {
    const searchFilm = async () => {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${CONSTS.API_KEY}&i=${id}`);
      console.log('RES:', res);
      setFilm(res.data);
    };
    searchFilm();
  }, [id]);

  if (film) return <Film key={id} title={film.Title} year={film.Year} poster={film.Poster} />;
  return false;
}

export default FilmDetails;
