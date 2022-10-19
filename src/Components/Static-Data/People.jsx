import people from './peopleData.json';
import Person from './Person';

function People() {
  return (
    <>
      {
        people.map((person) => (
          <Person
            key={person.name + person.age}
            name={person.name}
            age={person.age}
            job={person.job}
          />
        ))
        }
    </>
  );
}

export default People;
