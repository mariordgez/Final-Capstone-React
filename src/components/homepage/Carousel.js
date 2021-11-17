import React from 'react';
import PropTypes from 'prop-types';

const Carousel = (props) => {
  const { cars } = props;
  const mapCars = cars.map(
    (car, index) => (
      <div key={car.id} className={index > 0 ? 'carousel-item' : 'carousel-item active'}>
        <img src={car.image_url} className="d-block w-100" alt={car.model} />
      </div>
    ),
  );
  return (
    <div id="carsCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {mapCars}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carsCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carsCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

Carousel.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape()),
};

Carousel.defaultProps = {
  cars: [],
};

export default Carousel;
