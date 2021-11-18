import React from 'react';
import PropTypes from 'prop-types';

const NextSVG = (props) => {
  const { style } = props;
  return (
    <svg
      className={style.nextsvg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M21 12l-18 12v-24z" />
    </svg>
  );
};

NextSVG.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
};

NextSVG.defaultProps = {
  style: {},
};

export default NextSVG;
