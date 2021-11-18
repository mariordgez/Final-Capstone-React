import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './HomePage.module.css';

const CarCard = (props) => {
  const {
    id,
    name,
    model,
    brand,
    imageUrl,
  } = props;

  const image = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <article className={style.card}>
      <NavLink to={`detail/cars/${id}`}>
        <div style={image} className={style.bgimage} />
      </NavLink>
      <div className={style.info}>
        <h2>{`${brand} ${name}`}</h2>
        <h2>{`${model}`}</h2>
        <div className={style.hr} />
        <div className={style.desc}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <button className={style.detailsbtn} type="button">
          <NavLink to={`detail/cars/${id}`}>
            DETAILS
          </NavLink>
        </button>
      </div>
    </article>
  );
};

CarCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  model: PropTypes.string,
  brand: PropTypes.string,
  imageUrl: PropTypes.string,
};

CarCard.defaultProps = {
  id: 1,
  name: '',
  model: '',
  brand: '',
  imageUrl: '',
};

export default CarCard;
