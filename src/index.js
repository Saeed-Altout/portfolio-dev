import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProviderContexts } from "./contexts/ProviderContexts";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <ProviderContexts>
      <App />
    </ProviderContexts>
  </BrowserRouter>
);
