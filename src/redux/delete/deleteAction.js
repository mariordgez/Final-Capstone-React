import axios from 'axios';

const GET_CARS_REMOVE_FLAGS = 'car/GET_CARS_REMOVE_FLAGS';

const initialState = [];

const requestURL = 'http://localhost:4000/api/v1/cars';

export const getCarDeleteDetails = () => async (dispatch) => {
  const carsArr = [];
  axios.get(requestURL).then((response) => {
    const responseData = response.data;
    if(responseData) {
      responseData.forEach((obj) => {
        const carRecord = {
          id: obj.id,
          name: obj.name,
          model: obj.model,
          brand: obj.brand, 
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_REMOVE_FLAGS:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;