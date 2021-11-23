import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
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

  return (
    <div className={style.main}>
      {open ? <AddNewCar /> : ''}
      <div className={style.pageHeader}>
        <h1>Latest Car Models</h1>
        <h3>Please select a car model</h3>
        <div />
      </div>
      <Carousel />
    </div>
  );
};

export default HomePage;
