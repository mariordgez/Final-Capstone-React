import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { verifyCredentials } from './redux/login/loginAction';
import { getCarDeleteDetails } from './redux/delete/deleteAction';
import HomePage from './components/homepage/HomePage';
import LoginForm from './components/login/loginForm';
import Detail from './components/Detail';
import DeletePage from './components/delete/deletePage';
import Reservations from './components/Reservations/reservations';
import MyReservations from './components/Reservations/myReservations';
import AddNewCar from './components/forms/AddNewCar';
import './App.css';
import Navbar from './components/Navbar/navbar';
import { fetchCarList } from './redux/car_list/carListSlice';

function App() {
  const authDetails = useSelector((state) => state.loginPage);
  const carRecords = useSelector((state) => state.deletePage);
  const dispatch = useDispatch();
  const loadCarsDeleteDetails = bindActionCreators(getCarDeleteDetails, dispatch);
  const { button } = useSelector((state) => state.removeButton);

  useEffect(() => {
    loadCarsDeleteDetails();
    dispatch(fetchCarList());
  }, [button]);

  const submitCredentials = (unameVal) => {
    dispatch(verifyCredentials(unameVal));
  };

  return (
    <Router>
      <main style={{ display: 'flex' }}>
        <Routes>
          {authDetails.authenticated ? (
            <Route exact="true" path="/" element={<Navbar Page={HomePage} />} />
          ) : (
            <Route
              exact="true"
              path="/"
              element={(
                <LoginForm
                  submitCredentialsFunc={submitCredentials}
                  failed={authDetails.failedToAuth}
                />
              )}
            />
          )}
          <Route path="/detail/cars/:carid" element={<Navbar Page={Detail} />} />
          <Route path="/reservations" element={<Navbar Page={Reservations} />} />
          <Route path="/myReservations" element={<Navbar Page={MyReservations} />} />
          <Route path="/addCar" element={<Navbar Page={AddNewCar} />} />
          <Route path="/detail/cars/delete" element={<DeletePage carRecords={carRecords} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
