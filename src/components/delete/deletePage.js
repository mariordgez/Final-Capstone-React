import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  markCarRemoved,
  restoreRemovedCar,
} from '../../redux/delete/deleteAction';

const DeletePage = ({ carRecords }) => {
  const dispatch = useDispatch();

  const deleteCar = (e) => {
    dispatch(markCarRemoved(carRecords, e.target.id));
  };

  const restoreCar = (e) => {
    dispatch(restoreRemovedCar(carRecords, e.target.id));
  };

  return (
    <table>
      {carRecords.map((record) => (
        <tr key={record.id}>
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

DeletePage.propTypes = {
  carRecords: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    removed: PropTypes.bool.isRequired,
  })).isRequired,
};

export default DeletePage;
