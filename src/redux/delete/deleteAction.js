import axios from 'axios';

const GET_CARS_REMOVE_FLAGS = 'car/GET_CARS_REMOVE_FLAGS';
const MARK_CAR_REMOVED = 'car/MARK_CAR_REMOVED';
const RESTORE_REMOVED_CAR = 'car/RESTORE_REMOVED_CAR';

const initialState = [];

const requestURL = 'http://localhost:4000/api/v1/cars/';

export const getCarDeleteDetails = () => async (dispatch) => {
  const carsIdArr = [];
  let sortedCarIds = [];
  const carsArr = [];
  await axios.get(requestURL).then((response) => {
    const responseData = response.data;
    if (responseData.data) {
      const carObjs = responseData.data;
      carObjs.forEach((obj) => {
        const carId = obj.id;
        carsIdArr.push(carId);
      });
      sortedCarIds = carsIdArr.sort((a, b) => a - b);
    }
  });
  await Promise.all(sortedCarIds.map((id) => axios.get(`${requestURL}${id}`).then((response) => {
    const responseData = response.data;
    if (responseData) {
      const car = responseData.data;
      carsArr.push(car);
    }
  })));
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
  await axios.patch(`${requestURL}${id}`, removeState).then((response) => {
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
    payload: payloadObj.carObjects,
  });
};

export const restoreRemovedCar = (curState, id) => async (dispatch) => {
  const removeState = { removed: false };
  const payloadObj = {
    carId: id,
    updatedTime: null,
    carObjects: [],
  };
  axios.patch(`${requestURL}${id}`, removeState).then((response) => {
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
    payload: payloadObj.carObjects,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_REMOVE_FLAGS:
      return [...action.payload];
    case MARK_CAR_REMOVED:
      return [...action.payload];
    case RESTORE_REMOVED_CAR:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
