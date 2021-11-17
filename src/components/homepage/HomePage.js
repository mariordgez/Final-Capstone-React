import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarList } from '../../redux/homepage/carListSlice';
import Carousel from './Carousel';

const HomePage = () => {
  const { status, cars } = useSelector((state) => state.carList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'default') {
      dispatch(fetchCarList());
    }
  }, [status]);

  return (
    <section className="container">
      <Carousel cars={cars} />
    </section>
  );
};

export default HomePage;
