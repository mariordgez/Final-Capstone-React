import axios from 'axios';

const FETCH_RESERVATION_LIST = 'reservations/fetchReservationList';
const UPDATE_FETCH_RESERVATION_LIST = 'reservations/updateFetchReservationsList';
const FORM_TOGGLE = 'reservations/formToggle';
const initialState = {
  reservations: [],
  form: false,
};

const fetchAPI = async (method, endPoint, body) => {
  const request = await fetch(`${process.env.REACT_APP_API_PATH}${endPoint}`, {
    method,
    headers: {
      Accept: '*/*',
    },
    body,
  });
  const response = await request.json();
  return response;
};

export const fetchReservationList = () => async (dispatch) => {
  const response = await fetchAPI('GET', 'reservations');
  dispatch({
    type: FETCH_RESERVATION_LIST,
    payload: response,
  });
};

export const updateFetchReservationList = (body) => async (dispatch) => {
  await axios.post(`${process.env.REACT_APP_API_PATH}reservations/add`, body).then((response) => {
    const responseData = response.data;
    dispatch({
      type: UPDATE_FETCH_RESERVATION_LIST,
      payload: responseData,
    });
  });
};

export const formToggle = () => ({
  type: FORM_TOGGLE,
});

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATION_LIST:
      return {
        ...state,
        reservations: action.payload.data,
      };

    case UPDATE_FETCH_RESERVATION_LIST:
      return {
        ...state,
        reservations: action.payload.data,
      };

    case FORM_TOGGLE:
      return {
        ...state,
        form: !state.form,
      };

    default:
      return state;
  }
};

export default reservationReducer;
