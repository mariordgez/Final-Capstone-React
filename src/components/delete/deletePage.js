import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './DeletePage.module.css';
import {
  markCarRemoved,
  restoreRemovedCar,
  getCarDeleteDetails,
} from '../../redux/delete/deleteAction';
import { clickRemoveButton } from '../../redux/delete/deleteBtnAction';
import { fetchCarList } from '../../redux/car_list/carListSlice';

const DeletePage = () => {
  const dispatch = useDispatch();
  const carRecords = useSelector((state) => state.deletePage);
  const loadCarsDeleteDetails = bindActionCreators(getCarDeleteDetails, dispatch);
  const { button } = useSelector((state) => state.removeButton);

  useEffect(() => {
    loadCarsDeleteDetails();
    dispatch(fetchCarList());
  }, [button]);

  const deleteCar = (e) => {
    dispatch(markCarRemoved(carRecords, e.target.id));
    setTimeout(() => {
      dispatch(clickRemoveButton());
    }, 100);
  };

  const restoreCar = (e) => {
    dispatch(restoreRemovedCar(carRecords, e.target.id));
    setTimeout(() => {
      dispatch(clickRemoveButton());
    }, 100);
  };

  return (
    <div className={style.tableContainer}>
      <h1>Delete Cars</h1>
      <table>
        <tbody>
          {carRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.model}</td>
              <td>{record.brand}</td>
              <td>
                {record.removed ? (
                  <button
                    type="button"
                    className={style.restoreButton}
                    id={record.id}
                    onClick={restoreCar}
                  >
                    Restore
                  </button>
                ) : (
                  <button
                    type="button"
                    className={style.removeButton}
                    id={record.id}
                    onClick={deleteCar}
                  >
                    Remove
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeletePage;
