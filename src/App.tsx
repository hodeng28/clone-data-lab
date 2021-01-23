import React from 'react';
import './App.css';
import MainRouter from './Router/MainRouter';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div>
      <h1>NAVER DATALab.</h1>
      <Nav />
      <hr />
      <MainRouter />
    </div>
  );
}

export default App;
