import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_CAR_LIST = 'cars/fetchCarList';
const UPDATE_FETCH_CAR_LIST = 'cars/updateFetchCarList';

const initialState = {
  status: 'default',
  cars: [
    {
      name: 'Sentra',
      model: 'SV 2020',
      brand: 'Nissan',
      price: '20270.0',
      image_url:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-nissan-sentra-120-1574102513.jpg',
      removed: false,
    },

    {
      name: 'Civic',
      model: 'RS 2022',
      brand: 'Honda',
      price: '21900.0',
      image_url:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-honda-civic-sedan-110-1623810388.jpg',
      removed: false,
    },

    {
      name: '4matic',
      model: 'e460 2021',
      brand: 'Mercedes Benz',
      price: '62750.0',
      image_url:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-e450-4matic-sedan-107-1604280340.jpg',
      removed: false,
    },

    {
      name: 'Polestar',
      model: 'v60 t8 2020',
      brand: 'Volvo',
      price: '68940.0',
      image_url:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-volvo-v60-t8-polestar-205-hdr-1579105927-mmp-1-1636042387.jpg',
      removed: false,
    },
  ],
  response: '',
  indexes: [0, 1, 2],
  delay: true,
};

const optionalBody = (body) => {
  if (body === null) {
    return null;
  }
  return JSON.stringify(body);
};

const fetchAPI = async (method, endPoint, body = null) => {
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

export const fetchCarList = createAsyncThunk(FETCH_CAR_LIST, async () => {
  const response = await fetchAPI('GET', 'cars');
  return response;
});

export const updateFetchCarList = createAsyncThunk(
  UPDATE_FETCH_CAR_LIST,
  async (body) => {
    const response = await fetchAPI('POST', 'cars/add', body);
    return response;
  },
);

const carListSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    updateIndexes: (state, action) => ({
      status: state.status,
      cars: state.cars,
      response: '',
      indexes: action.payload,
      delay: state.delay,
    }),
    delayShow: (state, action) => ({
      status: state.status,
      cars: state.cars,
      response: '',
      indexes: state.indexes,
      delay: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarList.fulfilled, (state, action) => ({
        status: 'ready',
        cars: action.payload.data,
        response: '',
        indexes: state.indexes,
        delay: state.delay,
      }))
      .addCase(updateFetchCarList.fulfilled, (state, action) => ({
        status: state.status,
        cars: action.payload.data,
        response: action.payload.message,
        indexes: state.indexes,
        delay: state.delay,
      }))
      .addDefaultCase((state) => ({
        status: state.status,
        cars: state.cars,
        response: '',
        indexes: state.indexes,
        delay: state.delay,
      }));
  },
});

export const { updateIndexes, delayShow } = carListSlice.actions;
export default carListSlice;
