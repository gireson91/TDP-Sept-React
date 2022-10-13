import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Products from './Components/Props/Products';
import Parent from './Components/Props/Parent';

function App() {

  const Heading = () => <h1>YO!</h1>
  return (
    <div className="App">
        <Heading/>
        <Person/>
        {/* {Person()} DODGY */}
        <Products/>
        <Products 
        name="Pepsi"
        price={1.50}
        descript="another drink"
        />
         <Products 
        name="Fanta"
        price={3.00}
        descript="again, another drink"
        />
        <Parent/>
    </div>
  );
}

export default App;
