import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import '../../css/details.css';
import { fetchDetail } from '../../redux/detailReducer';

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carid } = useParams();
  const { data } = useSelector((state) => state.detailState.detail);
  useEffect(() => {
    dispatch(fetchDetail({ id: carid }));
  }, [dispatch]);

  const hanldeBack = () => {
    navigate('/');
  };
  const handleReservation = () => {
    navigate('/reservation/form');
  };

  if (!data) return <>loading</>;
  return (
    <>
      <div className="detailContainer">
        <div className="imgdisplay">
          <div className="img-container">
            <img src={data.image_url} alt="Super car" />
          </div>
        </div>
        <div className="detail">
          <ul className="detail-list">
            <li className="detail-list-header">
              <h1>{data.name}</h1>
            </li>
            <li className="detail-list-alt">{data.model}</li>
            <li>{data.brand}</li>
            <li className="detail-list-alt">{data.price}</li>
          </ul>
        </div>
        <div className="back">
          <button type="button" className="back-btn" onClick={hanldeBack}>
            Back
          </button>
        </div>
        <div className="reserve">
          <button type="button" className="reserve-btn" onClick={handleReservation}>
            Reserve
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
