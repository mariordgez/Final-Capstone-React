import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openForm } from '../../redux/car_list/addNewCarFormSlice';
import { updateFetchCarList } from '../../redux/car_list/carListSlice';
import Close from '../../svgs/close.svg';
import style from './AddNewCar.module.css';

const AddNewCar = () => {
  const { message } = useSelector((state) => state.carList);
  const dispatch = useDispatch();
  const toggleFormHandle = () => {
    dispatch(openForm());
  };
  const submitForm = (event) => {
    event.preventDefault();
    const userData = new FormData(event.target);
    const body = {
      name: userData.get('name'),
      model: userData.get('model'),
      brand: userData.get('brand'),
      price: userData.get('price'),
      image_url: userData.get('image_url'),
      removed: false,
    };
    dispatch(updateFetchCarList(body));
  };

  return (
    <div>
      <div className={style.glassContainer} />
      <div className={style.message}>
        <strong>{`MESSAGE ${message}`}</strong>
      </div>
      <div className={style.formContainer}>
        <button
          type="button"
          onClick={toggleFormHandle}
          className={style.closeButton}
        >
          <img src={Close} alt="close" />
        </button>
        <h3 className={style.title}>
          ADD A NEW CAR
        </h3>
        <form
          className={style.form}
          name="add_car"
          action="post"
          onSubmit={submitForm}
        >
          <label htmlFor="name">
            <input type="text" name="name" id="name" placeholder="Name" />
          </label>
          <label htmlFor="model">
            <input type="text" name="model" id="model" placeholder="Model" />
          </label>
          <label htmlFor="brand">
            <input type="text" name="brand" id="brand" placeholder="Brand" />
          </label>
          <label htmlFor="price">
            <input type="number" name="price" id="price" placeholder="Price" />
          </label>
          <label htmlFor="image_url">
            <input type="text" name="image_url" id="image_url" placeholder="Image URL" />
          </label>
          <input type="submit" className={style.submitButton} />
        </form>
      </div>
    </div>
  );
};

export default AddNewCar;
