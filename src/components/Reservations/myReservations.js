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
    <Card className="bg-dark text-white h-100">
      <Card.Img
        className="reservation-bg"
        src=" https://drive.google.com/uc?export=view&id=1JvXmF5rPm3dkeuzda-VK4g6U5iXku3bO"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title className="text-align big-title">
          Hello &nbsp;
          {userName}
          !, here you can see your scheduled reservations:
        </Card.Title>
        <Card.Text className="py-5">
          <Container>
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
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default MyReservation;
