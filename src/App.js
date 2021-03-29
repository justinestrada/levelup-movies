import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 
// import { Counter } from './Counter';
// import { Accordion } from './Accordion';
// import { Input } from './Input';
import { MoviesList } from './movies/MoviesList';
import { MovieDetail } from './movies/MovieDetail';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            {/* <Input />
            <Counter />
            <Accordion /> */}
            <MoviesList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

/*
function HelloWorld({ greeting = 'Hello', name }) {
  return (
    <h1>{greeting} {name}</h1>
  )
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
}
*/

export default App;
