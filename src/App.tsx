import React from "react";
import styles from  "./App.scss";
import {Header} from "./components/Header/Header";
import {Route, Routes, BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <div className={styles.container}>
          <Header />
        </div>
      }/>
      <Route path="/fonts" element={
        <div>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
            <h1>
              FONT This is a font 123 QWERTY
            </h1>
        </div>
      } />
      </Routes>
    </BrowserRouter>
    );
};

export default App;