import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { updateFetchReservationList } from '../../redux/reservations/reservationReducer';

const ReservationForm = () => {
  const { userId } = useSelector((state) => state.loginPage);
  const { cars } = useSelector((state) => state.carList);
  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    const reservationData = new FormData(event.target);
    const body = {
      user_id: userId,
      car_id: Number(reservationData.get('cars')),
      city: reservationData.get('city'),
      date: reservationData.get('date'),
    };
    console.log(body);

    dispatch(updateFetchReservationList(body));
  };

  return (
    <>
      <form className="" name="add_car" action="post" onSubmit={submitForm}>
        <br />
        <select id="cars" name="cars">
          {cars.map((car) => (
            <option key={car.id} value={car.id}>
              {car.model}
              {' '}
              {car.brand}
              {' '}
              {car.name}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="city">
          <input type="text" name="city" id="city" placeholder="City" required />
        </label>
        <br />
        <label htmlFor="date">
          <input type="date" name="date" id="date" placeholder="Date" required />
        </label>
        <br />
        <input type="submit" className="" />
      </form>
    </>
  );
};

export default ReservationForm;
