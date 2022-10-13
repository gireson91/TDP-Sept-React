import './App.css';
// import Person from './Person';
// import Products from './Components/Props/Products';
// import Parent from './Components/Props/Parent';
import TrueFalse from './Components/States/TrueFalse';
import Counter from './Components/States/Counter';

function App() {

  // const Heading = () => <h1>YO!</h1>
  return (
    <div className="App">

      
        {/* <Heading/>
        <Person/> */}
        {/* {Person()} DODGY */}

        {/* PROPS TOPIC: */}
        {/* Props example 1 with products */}
        {/* <Products/> */}
        {/* <Products 
        name="Pepsi"
        price={1.50}
        descript="another drink"
        />
         <Products 
        name="Fanta"
        price={3.00}
        descript="again, another drink"
        /> */}
        {/* Props example 1 with parent, child & baby */}
        {/* <Parent/> */}
        <TrueFalse/>
        <Counter/>
    </div>
  );
}

export default App;
