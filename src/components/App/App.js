import React from 'react';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Personal from '../Personal/Personal';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Personal></Personal>
      <Education></Education>
      <Experience></Experience>
    </div>
  );
}

export default App;
