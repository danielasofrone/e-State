import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./components/HomePage/HomePage";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Homepage />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
