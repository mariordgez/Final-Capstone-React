import React from 'react';
import { useDispatch } from 'react-redux';
import { openForm } from '../../redux/car_list/addNewCarFormSlice';
import { updateFetchCarList } from '../../redux/car_list/carListSlice';

const AddNewCar = () => {
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
      <div>
        <button type="button" onClick={toggleFormHandle}>CLOSE</button>
      </div>
      <div>
        <h2>ADD A CAR</h2>
      </div>
      <form name="add_car" action="post" onSubmit={submitForm}>
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
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNewCar;
