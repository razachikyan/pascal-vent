import React from "react";
import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reducer";
import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Discovery } from "./components/Discovery";
import { Font } from "./Font";

const store = createStore(rootReducer, composeWithDevTools());
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/discovery/" element={<Discovery />} />
            <Route path="/fonts/" element={<Font />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}
