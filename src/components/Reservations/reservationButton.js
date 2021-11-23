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
    <div className="h-100 text-align align-middle">
      <Card.Title className="my-5 text-align big-title">Welcome to test a car!</Card.Title>
      <Card.Text className="py-5">
        <Button variant="success" size="lg" onClick={reservationForm}>
          Reserve a test drive
        </Button>
      </Card.Text>
    </div>
  );
};

export default ReservationButton;
