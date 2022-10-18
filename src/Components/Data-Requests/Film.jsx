import PropTypes from 'prop-types';
import Heading from './Heading';

function Film({ title, year, poster }) {
  return (
    <>
      <Heading text={title} />
      <p>
        {`Year: ${year}`}
      </p>
      <img src={poster} alt="A film" />
    </>
  );
}

export default Film;

Film.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
