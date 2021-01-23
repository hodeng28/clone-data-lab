import React from 'react';
import './App.css';
import MainRouter from './Router/MainRouter';
import { NavLink } from 'react-router-dom';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <hr />
      <MainRouter />
    </>
  );
}

export default App;
