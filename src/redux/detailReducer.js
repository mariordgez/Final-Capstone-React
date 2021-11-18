import axios from "axios";

const LOAD_DETAIL = "LOAD_DETAIL";
const LOAD_DETAIL_SUCCESS = "LOAD_DETAIL_SUCCESS";
const LOAD_DETAIL_FAIL = "LOAD_DETAIL_FAIL";

const initialState = { detail: {} };

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
      return { greeting: action.payload };
    case LOAD_DETAIL_FAIL:
      return { ...state };

    default:
      return state;
  }
};

const endPoint = "http://127.0.0.1:3000/api/v1/cars/detail/";

const fetchDetail = () => (dispatch) => {
  dispatch(loadDetail());
  axios
    .get(`${endPoint}/${payload.id}`)
    .then((response) => {
      if (response.data !== "") {
        dispatch(loadDetailSuccess(response.data));
      }
    })
    .catch(() => {
      dispatch(loadDetailFail());
    });
};

export { detailReducer, fetchDetail };
