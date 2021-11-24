import axios from 'axios';

const GET_CARS_REMOVE_FLAGS = 'car/GET_CARS_REMOVE_FLAGS';
const MARK_CAR_REMOVED = 'car/MARK_CAR_REMOVED';
const RESTORE_REMOVED_CAR = 'car/RESTORE_REMOVED_CAR';

const initialState = [];

const requestURL = 'http://localhost:4000/api/v1/cars';

export const getCarDeleteDetails = () => async (dispatch) => {
  const carsArr = [];
  axios.get(requestURL).then((response) => {
    const responseData = response.data;
    if (responseData) {
      responseData.forEach((obj) => {
        const carRecord = {
          id: obj.id,
          name: obj.name,
          model: obj.model,
          brand: obj.brand,
          removed: obj.removed,
        };
        carsArr.push(carRecord);
      });
    }
  });
  dispatch({
    type: GET_CARS_REMOVE_FLAGS,
    payload: carsArr,
  });
};

export const markCarRemoved = (curState, id) => async (dispatch) => {
  const removeState = { removed: true };
  const payloadObj = {
    carId: id,
    updatedTime: null,
    carObjects: [],
  };
  axios.post(`${requestURL}/${id}`, removeState).then((response) => {
    payloadObj.updatedTime = response.data.updatedAt;
    const newState = [];
    for (let i = 0; i < curState.length; i += 1) {
      const modifiedObj = curState[i];
      if (modifiedObj.id === id) {
        modifiedObj.removed = true;
      }
      newState.push(modifiedObj);
    }
    payloadObj.carObjects = newState;
  });
  dispatch({
    type: MARK_CAR_REMOVED,
    payload: payloadObj,
  });
};

export const restoreRemovedCar = (curState, id) => async (dispatch) => {
  const removeState = { removed: false };
  const payloadObj = {
    carId: id,
    updatedTime: null,
    carObjects: [],
  };
  axios.post(`${requestURL}/${id}`, removeState).then((response) => {
    payloadObj.updatedTime = response.data.updatedAt;
    const newState = [];
    for (let i = 0; i < curState.length; i += 1) {
      const modifiedObj = curState[i];
      if (modifiedObj.id === id) {
        modifiedObj.removed = false;
      }
      newState.push(modifiedObj);
    }
    payloadObj.carObjects = newState;
  });
  dispatch({
    type: RESTORE_REMOVED_CAR,
    payload: payloadObj,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_REMOVE_FLAGS:
      return action.payload;
    case MARK_CAR_REMOVED:
      return action.payload.carObjects;
    case RESTORE_REMOVED_CAR:
      return action.payload.carObjects;
    default:
      return state;
  }
};

export default reducer;
