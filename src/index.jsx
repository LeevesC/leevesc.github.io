import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./css/style.css";
import "./css/nav.css";
import "./css/about.css";
import "./css/resume.css";
import "./css/portfolio.css";
import "./css/responsive.css";


import { MainProvider } from "./contexts/MainContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
