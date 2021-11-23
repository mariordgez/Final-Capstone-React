import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ReservationButton from './reservationButton';
import ReservationForm from './reservationForm';
import { fetchReservationList } from '../../redux/reservations/reservationReducer';

const Reservation = () => {
  const { reservations, form } = useSelector((state) => state.reservationList);
  const dispatch = useDispatch();
  useEffect(() => {
    if (reservations.length === 0) dispatch(fetchReservationList());
  }, []);

  return (
    <Card className="bg-dark text-white h-100">
      <Card.Img
        className="reservation-bg"
        src=" https://drive.google.com/uc?export=view&id=1JvXmF5rPm3dkeuzda-VK4g6U5iXku3bO"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Container>{form ? <ReservationForm /> : <ReservationButton />}</Container>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Reservation;
