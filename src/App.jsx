import logo from './logo.svg';
import './App.css';
import Person from './Person';

function App() {

  const Heading = () => <h1>YO!</h1>
  return (
    <div className="App">
        <Heading/>
        <Person/>
        {/* {Person()} DODGY */}
    </div>
  );
}

export default App;
