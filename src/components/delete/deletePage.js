import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getCarDeleteDetails,
  markCarRemoved,
  restoreRemovedCar,
} from '../../redux/delete/deleteAction';

const DeletePage = () => {
  const carRecords = useSelector((state) => state.deletePage);
  const dispatch = useDispatch();
  const loadCarsDeleteDetails = bindActionCreators(getCarDeleteDetails, dispatch);

  useEffect(() => {
    loadCarsDeleteDetails();
  }, []);

  const deleteCar = (e) => {
    dispatch(markCarRemoved(carRecords, e.target.id));
  };

  const restoreCar = (e) => {
    dispatch(restoreRemovedCar(carRecords, e.target.id));
  };

  return (
    <table>
      {carRecords.map((record) => (
        <tr key={record.id} id={record.id}>
          <td>{ record.name }</td>
          <td>{ record.model }</td>
          <td>{ record.brand }</td>
          <td>
            { record.removed ? <button type="button" id={record.id} onClick={deleteCar}>Remove</button>
              : <button type="button" id={record.id} onClick={restoreCar}>Restore</button> }
          </td>
        </tr>
      ))}
    </table>
  );
};

export default DeletePage;
