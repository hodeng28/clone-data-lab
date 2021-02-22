import React from "react";
import MainRouter from "./router/MainRouter";
import Nav from "./components/nav/Nav";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.app}>
        NAVER <strong>DATALab.</strong>
      </h1>
      <Nav />
      <hr />
      <MainRouter />
    </div>
  );
}

export default App;
