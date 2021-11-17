import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarList, updateIndexes } from '../../redux/homepage/carListSlice';
import Carousel from './Carousel';
import style from './HomePage.module.css';
import { initIndexes } from './indexes';

const HomePage = () => {
  const { status, cars, indexes } = useSelector((state) => state.carList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'default') {
      dispatch(fetchCarList());
    }
    if (status === 'ready') {
      dispatch(updateIndexes(initIndexes(cars)));
    }
  }, [status]);

  console.log(indexes);

  return (
    <section className="container">
      <div className={style.pageheader}>
        <h1>Latest Car Models</h1>
        <h3>Please select a car model</h3>
      </div>
      <Carousel />
    </section>
  );
};

export default HomePage;
