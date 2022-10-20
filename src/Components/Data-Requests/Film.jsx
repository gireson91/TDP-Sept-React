import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Film({
  id, title, year, poster, details,
}) {
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Img src={poster} alt="A film" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`Year: ${year}`}</Card.Text>
        {details && <Button variant="primary" type="button" onClick={() => navigate(`/filmDetails/${id}`)}>Details</Button>}

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
