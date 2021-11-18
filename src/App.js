import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
