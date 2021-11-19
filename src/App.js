import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/detail/cars/:carid" element={<Detail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
