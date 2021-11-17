import React from 'react';
import PropTypes from 'prop-types';

const Carousel = (props) => {
  const { cars } = props;
  const mapCars = cars.list.map(
    (car) => (
      <div key={car.id}>
        <h1>{car.name}</h1>
      </div>
    ),
  );
  return (
    <div>
      {mapCars}
    </div>
  );
};

Carousel.propTypes = {
  cars: PropTypes.shape(),
};

Carousel.defaultProps = {
  cars: [],
};

export default Carousel;
