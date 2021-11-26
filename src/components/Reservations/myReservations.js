import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { fetchReservationList } from '../../redux/reservations/reservationReducer';

const MyReservation = () => {
  const { reservations } = useSelector((state) => state.reservationList);
  const { userName, userId } = useSelector((state) => state.loginPage);
  const { cars } = useSelector((state) => state.carList);
  const dispatch = useDispatch();
  useEffect(() => {
    if (reservations.length === 0) dispatch(fetchReservationList());
  }, []);

  return (
    <Card className="bg-dark text-white h-100 w-100">
      <Card.Img
        className="reservation-bg"
        src="https://serving.photos.photobox.com/819316695111b6709175d5055965fa84088ff222721618dff0b06303002b1ef4c2366609.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title className="text-align big-title">
          Hello &nbsp;
          {userName}
          !, here you can see your scheduled reservations:
        </Card.Title>
        <Container className="py-5">
          <Table className="bg-white" striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>City</th>
                <th>Car</th>
              </tr>
            </thead>
            <tbody>
              {reservations
                .filter((reservation) => reservation.user_id === userId)
                .map((reservation) => cars
                  .filter((car) => car.id === reservation.car_id)
                  .map((filteredcar) => (
                    <tr key={filteredcar.id}>
                      <td>
                        {' '}
                        {reservation.date}
                        {' '}
                      </td>
                      <td>
                        {' '}
                        {reservation.city}
                      </td>
                      <td>
                        {filteredcar.brand}
                        {' '}
                        {filteredcar.name}
                      </td>
                    </tr>
                  )))}
            </tbody>
          </Table>
        </Container>

      </Card.ImgOverlay>
    </Card>
  );
};

export default MyReservation;
