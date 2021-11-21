import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { verifyCredentials } from './redux/login/loginAction';
import HomePage from './components/homepage/HomePage';
import LoginForm from './components/login/loginForm';
import './App.css';

function App() {
  const authDetails = useSelector((state) => state.loginPage);
  const dispatch = useDispatch();

  const submitCredentials = (unameVal) => {
    dispatch(verifyCredentials(unameVal));
  };

  return (
    <Router>
      <main>
        <Routes>
          {authDetails.authenticated ? <Route exact path="/" element={<HomePage />} />
            : <Route exact path="/" element={<LoginForm submitCredentialsFunc={submitCredentials} />} />}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
