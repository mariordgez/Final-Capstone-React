const VERIFY_CREDENTIALS = 'user/VERIFY_CREDENTIALS';

const initialState = {
  authenticated: false,
  failedToAuth: false,
}

const requestURL = 'http://localhost:4000/api/v1/users';

export const verifyCredentials = (username) => async (dispatch) => {
  const request = await fetch(requestURL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  const responseData = request.data;
  const userExists = false;
  if (responseData) {
    responseData.forEach((obj) => {
      if (username === obj.user_name) {
        userExists = true;
      }
    });
  }
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
      } else {
        return {
          ...state,
          failedToAuth: true,
        };
      }
    default:
      return state;
  }
};

export default reducer;