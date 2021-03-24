import React, { PropTypes } from 'react';
// import { Counter } from './Counter';
// import { Accordion } from './Accordion';
// import { Input } from './Input';
import { MoviesList } from './movies/MoviesList';
import logo from './logo.svg';
import './App.css';

// Up next - Lesson 12 - https://www.leveluptutorials.com/tutorials/react-for-everyone/proptypes

function App() {
  return (
    <div className="App">
      {/* <Input />
      <Counter />
      <Accordion /> */}
      <MoviesList />
    </div>
  );
}

function HelloWorld({ greeting = 'Hello', name }) {
  return (
    <h1>{greeting} {name}</h1>
  )
}

/*
HelloWorld.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
}
*/

export default App;
