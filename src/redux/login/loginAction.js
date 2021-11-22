import axios from 'axios';

const VERIFY_CREDENTIALS = 'user/VERIFY_CREDENTIALS';

const initialState = {
  authenticated: false,
  failedToAuth: false,
  userName: '',
  userId: null,
};

const requestURL = 'http://localhost:4000/api/v1/users';

export const verifyCredentials = (username) => async (dispatch) => {
  const userObj = initialState;
  await axios.get(requestURL).then((response) => {
    const responseData = response.data;
    if (responseData) {
      responseData.forEach((obj) => {
        if (username === obj.user_name) {
          userObj.authenticated = true;
          userObj.userName = obj.user_name;
          userObj.userId = obj.id;
        } else {
          userObj.failedToAuth = true;
        }
      });
    }
  });
  dispatch({
    type: VERIFY_CREDENTIALS,
    payload: userObj,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_CREDENTIALS:
      if (action.payload.authenticated) {
        return {
          ...state,
          authenticated: action.payload.authenticated,
          userName: action.payload.userName,
          userId: action.payload.userId,
        };
      }
      return {
        ...state,
        failedToAuth: action.payload.failedToAuth,
      };
    default:
      return state;
  }
};

export default reducer;
