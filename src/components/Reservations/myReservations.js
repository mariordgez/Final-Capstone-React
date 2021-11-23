import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { fetchReservationList } from '../../redux/reservations/reservationReducer';

const MyReservation = () => {
  const { reservations } = useSelector((state) => state.reservationList);
  const { userName, userId } = useSelector((state) => state.loginPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservationList());
    console.log(userId);
    console.log(reservations);
  }, []);
  return (
    <Card className="bg-dark text-white h-100">
      <Card.Img
        className="reservation-bg"
        src=" https://drive.google.com/uc?export=view&id=1JvXmF5rPm3dkeuzda-VK4g6U5iXku3bO"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>
          Hello &nbsp;
          {userName}
          !, here you can see your scheduled reservations:
        </Card.Title>
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
