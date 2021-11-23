import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { formToggle } from '../../redux/reservations/reservationReducer';

const ReservationButton = () => {
  const { userName } = useSelector((state) => state.loginPage);
  const dispatch = useDispatch();
  const reservationForm = () => {
    dispatch(formToggle());
  };

  return (
    <>
      <Card.Title className="text-align big-title">
        Hello &nbsp;
        {userName}
        !, here you can see your scheduled reservations:
      </Card.Title>
      <Card.Text className="py-5">
        <button type="button" onClick={reservationForm}>
          {' '}
          Activate Lasers
        </button>
      </Card.Text>
    </>
  );
};

export default ReservationButton;
