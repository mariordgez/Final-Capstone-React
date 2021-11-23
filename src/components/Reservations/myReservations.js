import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { fetchReservationList } from '../../redux/reservations/reservationReducer';

const MyReservation = () => {
  const { reservationList } = useSelector((state) => state.reservationList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservationList());
    console.log(reservationList);
  }, []);
  return (
    <Card className="bg-dark text-white h-100">
      <Card.Img
        src=" https://drive.google.com/uc?export=view&id=1JvXmF5rPm3dkeuzda-VK4g6U5iXku3bO"
        alt="Card image"
        fluid
      />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default MyReservation;
