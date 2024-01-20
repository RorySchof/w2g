// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PlanCreatedPage from './pages/PlanCreatedPage';

function App() {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/plan-created">Plan Created</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/plan-created" element={<PlanCreatedPage />} />
        <Route path="/" element={<h1>Welcome to W2G App</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
