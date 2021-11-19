import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openForm } from '../../redux/car_list/addNewCarFormSlice';
import { updateFetchCarList } from '../../redux/car_list/carListSlice';
import Close from '../../svgs/close.svg';
import style from './AddNewCar.module.css';

const AddNewCar = () => {
  const { response } = useSelector((state) => state.carList);
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

  const renderresponse = () => {
    if (Array.isArray(response)) {
      const mapReponse = response.map(
        (item) => (
          <div key={item.message}>
            <span>{item.message}</span>
          </div>
        ),
      );
      return mapReponse;
    }
    return response;
  };

  return (
    <div>
      <div className={style.glassContainer} />
      <div className={response === '' ? '' : style.message}>
        <span>{renderresponse()}</span>
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
            <input type="text" name="name" id="name" placeholder="Name" required />
          </label>
          <label htmlFor="model">
            <input type="text" name="model" id="model" placeholder="Model" required />
          </label>
          <label htmlFor="brand">
            <input type="text" name="brand" id="brand" placeholder="Brand" required />
          </label>
          <label htmlFor="price">
            <input type="number" name="price" id="price" placeholder="Price" required />
          </label>
          <label htmlFor="image_url">
            <input type="text" name="image_url" id="image_url" placeholder="Image URL" required />
          </label>
          <input type="submit" className={style.submitButton} />
        </form>
      </div>
    </div>
  );
};

export default AddNewCar;
