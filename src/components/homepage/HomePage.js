import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { openForm } from '../../redux/car_list/addNewCarFormSlice';
import { fetchCarList, updateIndexes } from '../../redux/car_list/carListSlice';
import { initIndexes } from './indexes';
import Carousel from './Carousel';
import AddNewCar from '../forms/AddNewCar';
import style from './HomePage.module.css';

const HomePage = () => {
  const { status, cars } = useSelector((state) => state.carList);
  const { open } = useSelector((state) => state.addNewCarForm);
  const wide = useMediaQuery({ query: '(min-width: 1200px)' });
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'default') {
      dispatch(fetchCarList());
    }
    if (status === 'ready') {
      if (wide) {
        dispatch(updateIndexes(initIndexes(cars)));
      } else {
        dispatch(updateIndexes(initIndexes(cars, true)));
      }
    }
  }, [status, wide]);

  const openFormHandle = () => {
    dispatch(openForm());
  };

  return (
    <main className={style.main}>
      <button type="button" onClick={openFormHandle}>ADD A NEW CAR</button>
      {open ? <AddNewCar /> : ''}
      <div className={style.pageheader}>
        <h1>Latest Car Models</h1>
        <h3>Please select a car model</h3>
        <div />
      </div>
      <Carousel />
    </main>
  );
};

export default HomePage;
