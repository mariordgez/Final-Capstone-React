import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faClipboard,
  faSignOutAlt,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';
import '../../css/navbar.css';

const Navbar = (props) => {
  const { Page } = props;
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-0 pt-2 text-white min-vh-100">
            <Link
              to="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </Link>
            <ul
              className="w-100 nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="px-1 nav-item w-100 hoverlink">
                <Link to="/" className="hoverlink nav-link align-middle px-0">
                  <FontAwesomeIcon icon={faHome} />
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              <li className="px-1 nav-item w-100 hoverlink">
                <Link to="/" className="hoverlink nav-link align-middle px-0">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  <span className="ms-1 d-none d-sm-inline">Reservations</span>
                </Link>
              </li>
              <li className="px-1 nav-item w-100 hoverlink">
                <Link to="/" className="hoverlink nav-link align-middle px-0">
                  <FontAwesomeIcon icon={faClipboard} />
                  <span className="ms-1 d-none d-sm-inline">My Reservations</span>
                </Link>
              </li>
              <li className="px-1 nav-item w-100 hoverlink">
                <Link to="/" className="hoverlink nav-link align-middle px-0">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span className="ms-1 d-none d-sm-inline">Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3">
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
