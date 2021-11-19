import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_CAR_LIST = 'cars/fetchCarList';
const UPDATE_FETCH_CAR_LIST = 'cars/updateFetchCarList';

const initialState = {
  status: 'default',
  cars: [],
  message: '',
  indexes: [],
  delay: true,
};

const optionalBody = (body) => {
  if (body === null) {
    return null;
  }
  return JSON.stringify(body);
};

const fetchAPI = async (method, endPoint, body = null) => {
  const request = await fetch(`http://localhost:4000/api/v1/${endPoint}`, {
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

export const fetchCarList = createAsyncThunk(FETCH_CAR_LIST, async () => {
  const response = await fetchAPI('GET', 'cars');
  return response;
});

export const updateFetchCarList = createAsyncThunk(UPDATE_FETCH_CAR_LIST, async (body) => {
  const response = await fetchAPI('POST', 'cars/add', body);
  return response;
});

const carListSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    updateIndexes: (state, action) => (
      {
        status: state.status,
        cars: state.cars,
        message: '',
        indexes: action.payload,
        delay: state.delay,
      }
    ),
    delayShow: (state, action) => (
      {
        status: state.status,
        cars: state.cars,
        message: '',
        indexes: state.indexes,
        delay: action.payload,
      }
    ),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarList.fulfilled, (state, action) => (
      {
        status: 'ready',
        cars: action.payload.data,
        message: action.payload.message,
        indexes: state.indexes,
        delay: state.delay,
      }
    ))
      .addCase(updateFetchCarList.fulfilled, (state, action) => (
        {
          status: state.status,
          cars: action.payload.data,
          message: action.payload.message,
          indexes: state.indexes,
          delay: state.delay,
        }
      ));
  },
});

export const { updateIndexes, delayShow } = carListSlice.actions;
export default carListSlice;
