// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlanCreatedPage from './pages/PlanCreatedPage';
import Planning1 from './components/Planning1';
import Navigation from './components/Navigation'; 
import Planning2 from './components/Planning2';
import Planning3 from './components/Planning3';



function Home() {
  return (
    <div>
      <Navigation />
      <h1>Welcome to W2G App</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/plan-created" element={<PlanCreatedPage />} />
        <Route path="/planning1" element={<Planning1 />} />
        <Route path="/" element={<Home />} />
        <Route path="/planning2" element={<Planning2 />} />
        <Route path="/planning3" element={<Planning3 />} />



      </Routes>
    </Router>
  );
}

export default App;
