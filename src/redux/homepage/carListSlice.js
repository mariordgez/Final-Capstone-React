import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_CAR_LIST = 'cars/fetchCarList';

const initialState = {
  status: 'default',
  cars: [],
  indexes: [],
};

const fetchAPI = async () => {
  const URL = 'http://localhost:4000/api/v1/cars';
  const request = await fetch(URL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  const response = await request.json();
  return response;
};

export const fetchCarList = createAsyncThunk(FETCH_CAR_LIST, async () => {
  const greeting = await fetchAPI();
  return greeting;
});

const carListSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    updateIndexes: (state, action) => (
      {
        status: state.status,
        cars: state.cars,
        indexes: action.payload,
      }
    ),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarList.fulfilled, (state, action) => (
      { status: 'ready', cars: [...state.cars, ...action.payload], indexes: state.indexes }
    ));
  },
});

export const { updateIndexes } = carListSlice.actions;
export default carListSlice;
