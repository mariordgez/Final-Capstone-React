import React from 'react';
import { useDispatch } from 'react-redux';
import '../../css/reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { formToggle } from '../../redux/reservations/reservationReducer';

const ReservationButton = () => {
  const dispatch = useDispatch();
  const reservationForm = () => {
    dispatch(formToggle());
  };

  return (
    <>
      <Card.Title className="text-align big-title">Welcome to test a car!</Card.Title>
      <Card.Text className="py-5">
        <Button variant="primary" size="lg" onClick={reservationForm}>
          Reserve a test drive
        </Button>
      </Card.Text>
    </>
  );
};

export default ReservationButton;
