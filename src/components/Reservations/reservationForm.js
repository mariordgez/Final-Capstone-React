import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/reservation.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { updateFetchReservationList, formToggle } from '../../redux/reservations/reservationReducer';

const ReservationForm = () => {
  const { userId } = useSelector((state) => state.loginPage);
  const { cars } = useSelector((state) => state.carList);
  const dispatch = useDispatch();
  const cancelForm = (event) => {
    event.preventDefault();
    dispatch(formToggle());
  };
  const submitForm = (event) => {
    event.preventDefault();
    const reservationData = new FormData(event.target);
    const body = {
      user_id: userId,
      car_id: Number(reservationData.get('cars')),
      city: reservationData.get('city'),
      date: reservationData.get('date'),
    };
    JSON.stringify(body);
    dispatch(formToggle());
    dispatch(updateFetchReservationList(body));
  };

  return (
    <>
      <h1 className="text-align">Fill out the reservation form</h1>
      <form className="text-align" name="add_car" action="post" onSubmit={submitForm}>
        <br />
        <label htmlFor="cars">
          <h3>Select your test car:  </h3>
          <select className="" id="cars" name="cars" placeholder="Select a car">
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
        </label>
        <br />
        <label className="py-3" htmlFor="city">
          <h3>Please select a city:</h3>
          <input className="" type="text" name="city" id="city" placeholder="City" required />
        </label>
        <br />
        <label className="" htmlFor="date">
          <h3>Select an available date: </h3>
          <input type="date" name="date" id="date" placeholder="Date" required />
        </label>
        <br />
        <div className="py-3">
          <Button
            type="submit"
            className="mx-2"
            variant="success"
            size="lg"
          >
            Create reservation
          </Button>

          <Button type="button" variant="danger" size="lg" onClick={cancelForm}>
            Cancel reservation
          </Button>
        </div>
      </form>
    </>
  );
};

export default ReservationForm;
