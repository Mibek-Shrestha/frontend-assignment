import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ItemProvider from "./context/ProductContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ItemProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ItemProvider>
);
