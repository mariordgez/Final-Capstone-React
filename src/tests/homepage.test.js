import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import HomePage from '../components/homepage/HomePage';
import CarsJSON from './cars.json';

const middlewares = [thunk];

const initialState = {
  carList: {
    status: 'default',
    cars: CarsJSON.data,
    response: '',
    indexes: [0, 1, 2, 3],
    delay: true,
  },
  addNewCarForm: {
    open: false,
    formDelay: true,
  }
};
const mockStore = configureStore(middlewares);
let store;

beforeEach(() => {
  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>,
  );
});

describe('Homepage component', () => {
  test('Render car model', () => {
    expect(screen.getByText('e460 2021')).toBeInTheDocument();
  });
  test('Render Back button', () => {
    expect(screen.getByTestId('back-btn').tagName).toBe('BUTTON');
  });
});
