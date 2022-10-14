import './App.css';
// import Person from './Person';
// import Products from './Components/Props/Products';
// import Parent from './Components/Props/Parent';
import TrueFalse from './Components/States/TrueFalse';
import Counter from './Components/States/Counter';
import Converter from './Components/States/Converter';

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
  
        <Converter/>

        {/* <TrueFalse/> */}
        <Counter/>
    </div>
  );
}

export default App;
