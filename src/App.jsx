import './App.css';
// import Person from './Person';
// import Products from './Components/Props/Products';
// import Parent from './Components/Props/Parent';
// import TrueFalse from './Components/States/TrueFalse';
// import Counter from './Components/States/Counter';
// import Converter from './Components/States/Converter';
import Person from './Person';
import people from './people.json';

function App() {

  const Heading = () => <h1>YO!</h1>

  const Me = (props) => {
    console.log("PROPS:", props);
   return (
    <>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Job: {props.job}</p>
    </>

  )};
  return (
    <div className="App">
      {/* <Me name="Jordan" age={28} job="Trainer"/> */}
      {/* {Me({ name: "JH", age: 28, job: "Trainer"})} */}
      {/* {Heading()} */}
      {/* <Heading/> */}
      {/* <Converter/> */}
      {/* <TrueFalse/> */}
      {/* <Counter/> */}
      {
        people.map(person => {
          console.log("PERSON:", person);
          return <Person key={person.name + person.age} name={person.name} age={person.age} job={person.job}/>;
        })
      }
    </div>
  );
}

export default App;
