import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "../../css/details.css";
import { fetchDetail } from "../../redux/detailReducer";
import { formToggle } from "../../redux/reservations/reservationReducer";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carid } = useParams();
  const { data } = useSelector((state) => state.detailState.detail);
  useEffect(() => {
    dispatch(fetchDetail({ id: carid }));
  }, [dispatch]);

  const handleBack = () => {
    navigate("/");
  };
  const handleReservation = () => {
    dispatch(formToggle());
    navigate("/reservations");
  };
  if (!data) return <>loading</>;
  const formatCurrency = (n, currency) =>
    currency + n.replace(/(\d)(?=(\d{3})+\.)/g, "$1,");

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
            <li className="detail-list-alt">
              {formatCurrency(data.price, "$")}
            </li>
          </ul>
        </div>
        <div className="back">
          <button
            type="button"
            data-testid="back-btn"
            className="back-btn"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
        <div className="reserve">
          <button
            type="button"
            data-testid="reserve-btn"
            className="reserve-btn"
            onClick={handleReservation}
          >
            Reserve
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
