import React from 'react';
import PropTypes from 'prop-types';
import CarCard from './CarCard';
// import style from './HomePage.module.css';

const CarouselWide = (props) => {
  const { cars } = props;
  const mapCars = cars.map(
    (car, index) => (
      <CarCard
        key={car.id}
        index={index}
        id={car.id}
        name={car.name}
        model={car.model}
        brand={car.brand}
        imageUrl={car.image_url}
      />
    ),
  );
  return (
    <div>
      {mapCars}
    </div>
  );
};

CarouselWide.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape()),
};

CarouselWide.defaultProps = {
  cars: [],
};

export default CarouselWide;
