import React from 'react';
import PropTypes from 'prop-types';

const PrevSVG = (props) => {
  const { style } = props;
  return (
    <svg
      className={style.prevsvg}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 24 24"
    >
      <path d="M3 12l18-12v24z" />
    </svg>
  );
};

PrevSVG.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
};

PrevSVG.defaultProps = {
  style: {},
};

export default PrevSVG;
