import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delayShow, updateIndexes } from '../../redux/car_list/carListSlice';
import { shiftRow, unshiftRow } from './indexes';
import CarCard from './CarCard';
import NextSVG from '../../svgs/NextSVG';
import PrevSVG from '../../svgs/PrevSVG';
import style from './HomePage.module.css';

const CarouselWide = () => {
  const dispatch = useDispatch();

  const {
    cars,
    indexes,
    delay,
  } = useSelector((state) => state.carList);

  const transition = () => {
    dispatch(delayShow(true));
    setTimeout(() => dispatch(delayShow(false)), 200);
  };

  useEffect(() => {
    transition();
  }, []);

  const mapCars = indexes.map(
    (index) => {
      if (cars[index] !== undefined) {
        return (
          <CarCard
            key={cars[index].id}
            id={cars[index].id}
            name={cars[index].name}
            model={cars[index].model}
            brand={cars[index].brand}
            imageUrl={cars[index].image_url}
          />
        );
      }
      return '';
    },
  );

  const nextHandle = () => {
    transition();
    const newIndexes = shiftRow(indexes, cars);
    dispatch(updateIndexes(newIndexes));
  };

  const prevHandle = () => {
    transition();
    const newIndexes = unshiftRow(indexes, cars);
    dispatch(updateIndexes(newIndexes));
  };

  return (
    <div className={style.carousel}>
      <button type="button" className={style.prevBtn} onClick={prevHandle}>
        <PrevSVG style={style} />
      </button>
      <div className={
        delay
          ? style.cardsContainer
          : `${style.cardsContainer} ${style.cardsContainerShow}`
        }
      >
        {cars.length >= 1 ? mapCars : ''}
      </div>
      <button type="button" className={style.nextBtn} onClick={nextHandle}>
        <NextSVG style={style} />
      </button>
    </div>
  );
};

export default CarouselWide;
