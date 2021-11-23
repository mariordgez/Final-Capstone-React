import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faClipboard,
  faSignOutAlt,
  faCalendarCheck,
  faCar,
} from '@fortawesome/free-solid-svg-icons';
import { openForm } from '../../redux/car_list/addNewCarFormSlice';

const Navbar = (props) => {
  const dispatch = useDispatch();
  const { Page } = props;
  const openFormHandle = () => {
    dispatch(openForm());
  };
  return (
    <div className="container-fluid gap-0">
      <div className="row flex-nowrap">
        <div className="col-auto  px-0 bg-white">
          <div className="w-100 border-right d-flex flex-column align-items-center align-items-sm-start px-0 pt-2 text-white min-vh-100">
            <NavLink
              exact
              to="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </NavLink>
            <ul
              className="w-100 nav  flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="px-1 nav-item w-100 hoverli">
                <NavLink
                  to="/"
                  className={(isActive) => `hoverlink  align-middle px-0${!isActive ? ' selected' : ''}`}
                >
                  <FontAwesomeIcon icon={faHome} />
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </NavLink>
              </li>
              <li className="px-1 nav-item w-100 hoverli">
                <NavLink
                  to="/reservations"
                  className={(isActive) => `hoverlink  align-middle px-0${!isActive ? ' selected' : ''}`}
                >
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  <span className="ms-1 d-none d-sm-inline">Reservations</span>
                </NavLink>
              </li>
              <li className="px-1 nav-item w-100 hoverli">
                <NavLink
                  to="/myReservations"
                  className={(isActive) => `hoverlink  align-middle px-0${!isActive ? ' selected' : ''}`}
                >
                  <FontAwesomeIcon icon={faClipboard} />
                  <span className="ms-1 d-none d-sm-inline">My Reservations</span>
                </NavLink>
              </li>
              <li className="px-1 nav-item w-100 hoverli">
                <NavLink
                  to="/"
                  onClick={openFormHandle}
                  className={(isActive) => `hoverlink  align-middle px-0${!isActive ? ' selected' : ''}`}
                >
                  <FontAwesomeIcon icon={faCar} />
                  <span className="ms-1 d-none d-sm-inline">Add new car</span>
                </NavLink>
              </li>
              <li className="px-1 nav-item w-100 hoverli">
                <NavLink
                  to="/"
                  className={(isActive) => `hoverlink  align-middle px-0 ${!isActive ? ' selected' : ''}`}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span className="ms-1 d-none d-sm-inline">Sign Out</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col px-0">
          <Page />
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  Page: PropTypes.elementType,
};
Navbar.defaultProps = {
  Page: 'HomePage',
};
export default Navbar;
