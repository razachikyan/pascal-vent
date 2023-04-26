import React from "react";
import styles from "./App.scss";
import { Header } from "./components/Header/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Discovery } from "./components/Discovery";
import { Main } from "./components/Main/Main";
import { Font } from "./Font";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.app}>
              <div className={styles.container}>
                <Header />
                <Main />
                <Footer />
              </div>
            </div>
          }
        />
        <Route path="/discovery/" element={<Discovery />} />
        <Route path="/fonts/" element={<Font />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
