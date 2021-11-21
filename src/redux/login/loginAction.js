import axios from 'axios';

const VERIFY_CREDENTIALS = 'user/VERIFY_CREDENTIALS';

const initialState = {
  authenticated: false,
  failedToAuth: false,
};

const requestURL = 'http://localhost:4000/api/v1/users';

export const verifyCredentials = (username) => async (dispatch) => {
  let userExists = false;
  await axios.get(requestURL).then((response) => {
    const responseData = response.data;
    if (responseData) {
      responseData.forEach((obj) => {
        if (username === obj.user_name) {
          userExists = true;
        }
      });
    }
  });
  dispatch({
    type: VERIFY_CREDENTIALS,
    payload: userExists,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_CREDENTIALS:
      if (action.payload) {
        return {
          ...state,
          authenticated: action.payload,
        };
      }
      return {
        ...state,
        failedToAuth: true,
      };
    default:
      return state;
  }
};

export default reducer;
