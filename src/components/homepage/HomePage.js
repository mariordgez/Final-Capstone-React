import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { fetchCarList, updateIndexes } from '../../redux/car_list/carListSlice';
import Carousel from './Carousel';
import style from './HomePage.module.css';
import { initIndexes } from './indexes';

const HomePage = () => {
  const { status, cars } = useSelector((state) => state.carList);
  const dispatch = useDispatch();
  const wide = useMediaQuery({ query: '(min-width: 1200px)' });
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
    <main>
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
