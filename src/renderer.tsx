import React from "react";
import "./index.scss";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.body);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
