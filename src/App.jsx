import './App.css';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import Poke from './Components/Data-Requests/Poke';
import Counter from './Components/States/Counter';
import OMDB from './Components/Data-Requests/OMDB';
import SearchableList from './Components/Lifting-State/SearchableList';
import Home from './Components/Routing/Home';
import Navigation from './Components/Routing/Navigation';
import ParamsExample from './Components/Routing/ParamsExample';
import People from './Components/Static-Data/People';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/home">
            Home
          </Link>
          <Link to="/liftingState">
            <button type="button">Lifting State</button>
          </Link>
          <Link to="/state">
            State
          </Link>
          <Link to="/staticData">
            Static Data
          </Link>
          <Link to="/dataRequests/example">
            Data Req - Example
          </Link>
          <Link to="/dataRequests/solution">
            Data Req - Solution
          </Link>
          <Navigation />
        </nav>
        <br />
        <header>
          <h1>I AM A HEADER</h1>
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/state" element={<Counter />} />
          <Route path="/staticData" element={<People />} />
          <Route path="/liftingState" element={<SearchableList />} />
          <Route path="/dataRequests/example" element={<Poke />} />
          <Route path="/dataRequests/solution" element={<OMDB />} />
          <Route path="/params/:colour" element={<ParamsExample />} />
        </Routes>
        <footer>
          I AM A FOOTER
        </footer>
      </Router>
      {/* <Converter/> */}
      {/* <TrueFalse/> */}
    </div>
  );
}

export default App;
