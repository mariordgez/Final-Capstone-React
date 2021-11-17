import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIndexes } from '../../redux/homepage/carListSlice';
import CarCard from './CarCard';
import { shiftRow, unshiftRow } from './indexes';

const CarouselWide = () => {
  const { status, cars, indexes } = useSelector((state) => state.carList);
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

  const next = () => {
    const newIndexes = shiftRow(indexes, cars);
    dispatch(updateIndexes(newIndexes));
  };

  const prev = () => {
    const newIndexes = unshiftRow(indexes, cars);
    dispatch(updateIndexes(newIndexes));
  };

  return (
    <div className="d-flex">
      <button type="button" onClick={prev}>Prev</button>
      {status === 'ready' ? mapCars : ''}
      <button type="button" onClick={next}>Next</button>
    </div>
  );
};

export default CarouselWide;
