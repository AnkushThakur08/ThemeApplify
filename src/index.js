import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// REACT ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forget from "./Components/Forget";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/forget" element={<Forget />} />
    </Routes>
  </Router>
);

reportWebVitals();
