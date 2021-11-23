const FETCH_RESERVATION_LIST = 'reservations/fetchReservationList';
const UPDATE_FETCH_RESERVATION_LIST = 'reservations/updateFetchReservationsList';
const FORM_TOGGLE = 'reservations/formToggle';
const initialState = {
  reservations: [],
  form: false,
};

const optionalBody = (body) => {
  if (body === null) {
    return null;
  }
  return JSON.stringify(body);
};

const fetchAPI = async (method, endPoint, body) => {
  const request = await fetch(`${process.env.REACT_APP_API_PATH}${endPoint}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: optionalBody(body),
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

export const updateFetchReservationList = () => async (dispatch, body) => {
  const response = await fetchAPI('POST', 'reservations/add', body);
  dispatch({
    type: UPDATE_FETCH_RESERVATION_LIST,
    payload: response,
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
