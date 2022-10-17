import './App.css';
// import Person from './Person';
// import Products from './Components/Props/Products';
// import Parent from './Components/Props/Parent';
// import TrueFalse from './Components/States/TrueFalse';
// import Counter from './Components/States/Counter';
// import Converter from './Components/States/Converter';
// import Person from './Components/Static-Data/Person';
// import people from './Components/Static-Data/people.json';
// import Poke from './Components/Data-Requests/Poke';
// import Counter from './Components/States/Counter';
import OMDB from './Components/Data-Requests/OMDB';

function App() {
  return (
    <div className="App">
      {/* <Me name="Jordan" age={28} job="Trainer"/> */}
      {/* {Me({ name: "JH", age: 28, job: "Trainer"})} */}
      {/* {Heading()} */}
      {/* <Heading/> */}
      {/* <Converter/> */}
      {/* <TrueFalse/> */}
      {/* <Counter/> */}
      {/* {
        people.map(person => {
          console.log("PERSON:", person);
          return <Person
          key={person.name + person.age}
          name={person.name}
          age={person.age}
          job={person.job}/>;
        })
      } */}
      {/* <Poke /> */}
      <OMDB />
    </div>
  );
}

export default App;
