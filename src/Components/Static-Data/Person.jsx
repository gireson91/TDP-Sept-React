/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
function Person(props) {
  return (
    <div>
      <p>
        Name:
        {' '}
        {props.name}
      </p>
      <p>
        Age
        {' '}
        {props.age}
      </p>
      <p>
        Job:
        {' '}
        {props.job}
      </p>
    </div>
  );
}

export default Person;
