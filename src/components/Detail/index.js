import React from 'react';
import '../../css/details.css';

const Detail = () => {
  const alv = 'img display';
  return (
    <>
      <div className="detailContainer">
        <div className="imgdisplay">
          <h1>{alv}</h1>
        </div>
        <div className="detail">
          <h1>detail</h1>
        </div>
        <div className="back">
          <h1>back</h1>
        </div>
        <div className="reserve">
          <h1>reserve</h1>
        </div>
      </div>
    </>
  );
};

export default Detail;
