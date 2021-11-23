import axios from 'axios';

const LOAD_DETAIL = 'LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'LOAD_DETAIL_FAIL';

const initialState = {
  detail: {
    data: {},
  },
};

const loadDetail = (payload) => ({
  type: LOAD_DETAIL,
  payload,
});

const loadDetailSuccess = (payload) => ({
  type: LOAD_DETAIL_SUCCESS,
  payload,
});

const loadDetailFail = (payload) => ({
  type: LOAD_DETAIL_FAIL,
  payload,
});

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DETAIL:
      return { ...state };
    case LOAD_DETAIL_SUCCESS:
      return { ...state, detail: action.payload };
    case LOAD_DETAIL_FAIL:
      return { ...state };

    default:
      return state;
  }
};

const fetchDetail = (payload) => (dispatch) => {
  dispatch(loadDetail());
  axios
    .get(`${process.env.REACT_APP_API_PATH}cars/${payload.id}`)
    .then((response) => {
      if (response.data !== '') {
        dispatch(loadDetailSuccess(response.data));
      }
    })
    .catch(() => {
      dispatch(loadDetailFail());
    });
};

export { detailReducer, fetchDetail };
