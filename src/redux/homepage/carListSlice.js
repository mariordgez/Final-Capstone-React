import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_CAR_LIST = 'cars/FETCH_CAR_LIST';

const initialState = {
  status: 'default',
  cars: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCarList.fulfilled, (state, action) => (
      { status: 'ready', cars: [...state.cars, ...action.payload] }
    ));
  },
});

export default carListSlice;
