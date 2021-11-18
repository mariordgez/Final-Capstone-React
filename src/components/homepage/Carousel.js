import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delayShow, updateIndexes } from '../../redux/homepage/carListSlice';
import CarCard from './CarCard';
import { shiftRow, unshiftRow } from './indexes';
import style from './HomePage.module.css';
import NextSVG from '../../svgs/NextSVG';
import PrevSVG from '../../svgs/PrevSVG';

const CarouselWide = () => {
  const {
    cars,
    indexes,
    delay,
  } = useSelector((state) => state.carList);
  const dispatch = useDispatch();

  const mapCars = indexes.map(
    (index) => (
      <CarCard
        key={cars[index].id}
        id={cars[index].id}
        name={cars[index].name}
        model={cars[index].model}
        brand={cars[index].brand}
        imageUrl={cars[index].image_url}
      />
    ),
  );

  const transition = () => {
    dispatch(delayShow(true));
    setTimeout(() => dispatch(delayShow(false)), 200);
  };

  const next = () => {
    transition();
    const newIndexes = shiftRow(indexes, cars);
    dispatch(updateIndexes(newIndexes));
  };

  const prev = () => {
    transition();
    const newIndexes = unshiftRow(indexes, cars);
    dispatch(updateIndexes(newIndexes));
  };

  return (
    <div className={style.carousel}>
      <button type="button" className={style.prevbtn} onClick={prev}>
        <PrevSVG style={style} />
      </button>
      <div className={delay ? style.cardscon : `${style.cardscon} ${style.cardsconshow}`}>
        {cars.length >= 1 ? mapCars : ''}
      </div>
      <button type="button" className={style.nextbtn} onClick={next}>
        <NextSVG style={style} />
      </button>
    </div>
  );
};

export default CarouselWide;
