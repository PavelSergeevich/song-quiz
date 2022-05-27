import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes,
  Route } from "react-router-dom";
import './App.css';
import Quiz from "./components/general/Quiz";
import Summary from "./components/general/Summary";
import Home from "./components/general/Home";


function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
