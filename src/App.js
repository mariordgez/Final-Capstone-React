import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { verifyCredentials } from './redux/login/loginAction';
import HomePage from './components/homepage/HomePage';
import LoginForm from './components/login/loginForm';
import Detail from './components/Detail';
import './App.css';
import Navbar from './components/Navbar/navbar';

function App() {
  const authDetails = useSelector((state) => state.loginPage);
  const dispatch = useDispatch();

  const submitCredentials = (unameVal) => {
    dispatch(verifyCredentials(unameVal));
  };

  return (
    <Router>
      <main style={{ display: 'flex' }}>
        <Routes>
          {authDetails.authenticated ? (
            <Route exact path="/" element={<Navbar Page={HomePage} />} />
          ) : (
            <Route
              exact
              path="/"
              element={(
                <LoginForm
                  submitCredentialsFunc={submitCredentials}
                  failed={authDetails.failedToAuth}
                />
              )}
            />
          )}
          <Route path="/detail/cars/:carid" element={<Detail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
