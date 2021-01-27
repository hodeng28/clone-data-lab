import React from 'react';
import MainRouter from './Router/MainRouter';
import Nav from './Components/Nav/Nav';
import styles from './App.module.css';
import { Button } from 'antd';

function App() {
  return (
    <div>
      <h1 className={styles.app}>NAVER <strong>DATALab.</strong></h1>
      <Nav />
      <hr />
      <MainRouter />

      <Button type="primary">Hello, Ant Design!</Button>
      <a href="#">I'm a link. Click me, please!</a>
    </div>
  );
}

export default App;
