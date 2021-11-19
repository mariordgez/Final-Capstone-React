import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import { verifyCredentials } from './redux/login/loginAction';
import HomePage from './components/homepage/HomePage';
import loginPage from './components/login/loginForm';
import './App.css';

function App() {
  const authDetails = useSelector((state) => state.loginPageReducer);
  const dispatch = useDispatch();

  const submitCredentials = (unameVal) => {
    dispatch(verifyCredentials(unameVal));
  };


  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" render={authDetails.authenticated ? <HomePage /> :
          <Redirect to="/login" />} />
          <Route path="/login" component={ <loginPage /> } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
