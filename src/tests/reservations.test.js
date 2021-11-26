import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import MyReservations from '../components/Reservations/myReservations';

const middlewares = [thunk];

const initialState = {
  reservationList: {
    reservations: [
      {
        city: 'testing city',
        date: '2021/12/12',
        car_id: 1,
        user_id: 1,
      },
    ],
  },
  loginPage: {
    authenticated: true,
    failedToAuth: true,
    userName: 'john123',
    userId: 1,
  },
  carList: {
    cars: [
      {
        id: 1,
        name: 'test',
        model: 'v60 t8 2020',
        brand: 'Sentra',
        price: '68940.0',
        image_url:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-volvo-v60-t8-polestar-205-hdr-1579105927-mmp-1-1636042387.jpg',
        removed: false,
        created_at: '2021-11-25T16:19:51.826Z',
        updated_at: '2021-11-25T16:19:51.826Z',
      },
    ],
  },
  detailState: {
    detail: {
      data: {
        id: 1,
        name: 'Sentra test',
        model: 'SV 2020 test',
        brand: 'Nissan test',
        price: '20270.0',
        image_url:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-nissan-sentra-120-1574102513.jpg',
        removed: false,
        created_at: '2021-11-17T14:53:47.806Z',
        updated_at: '2021-11-17T14:53:47.806Z',
      },
    },
  },
};
const mockStore = configureStore(middlewares);
let store;

beforeEach(() => {
  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Router>
        <MyReservations />
      </Router>
    </Provider>,
  );
});

describe('Render reservations component', () => {
  test('Render reserved car name', () => {
    expect(screen.getByText('Sentra test')).toBeInTheDocument();
  });
  test('Render date of test', () => {
    expect(screen.getByText('2021/12/12')).toBeInTheDocument();
  });
  test('Render city of test', () => {
    expect(screen.getByText('testing city')).toBeInTheDocument();
  });
});
