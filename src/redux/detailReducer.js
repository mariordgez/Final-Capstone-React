import axios from 'axios';

const LOAD_DETAIL = 'LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'LOAD_DETAIL_FAIL';

const initialState = {
  detail: {
    data: {
      name: 'Civic',
      model: 'RS 2022',
      brand: 'Honda',
      price: '21900.0',
      image_url:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-honda-civic-sedan-110-1623810388.jpg',
      removed: false,
    },
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
    .get(`${process.env.REACT_APP_API_PATH}${payload.id}`)
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
