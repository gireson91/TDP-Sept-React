import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Heading from './Heading';

function Film({
  id, title, year, poster, details,
}) {
  const navigate = useNavigate();

  return (
    <>
      <Heading text={title} />
      <p>
        {`Year: ${year}`}
      </p>
      <img src={poster} alt="A film" />
      {details && <button type="button" onClick={() => navigate(`/filmDetails/${id}`)}>Details</button>}
    </>
  );
}

export default Film;

Film.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  details: PropTypes.bool,
  id: PropTypes.string,
};

Film.defaultProps = {
  details: false,
  id: undefined,
};
