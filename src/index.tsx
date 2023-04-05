import React from "react";
import { StrictMode } from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)

root.render(
    // <StrictMode>
        <div>
            hello
        </div>
    // </StrictMode>
)