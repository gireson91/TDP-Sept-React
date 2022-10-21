import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Film({
  id, title, year, poster, details,
}) {
  const navigate = useNavigate();

  const handleClick = details ? () => navigate(`/filmDetails/${id}`) : false;

  return (
    <Card className="h-100" onClick={handleClick}>
      <Card.Img src={poster} alt="A film" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`Year: ${year}`}</Card.Text>
      </Card.Body>
    </Card>
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
