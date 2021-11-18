import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import carListSlice from './homepage/carListSlice';

const combineMiddleware = [thunk, logger];

const reducer = combineReducers({
  carList: carListSlice.reducer,
});

const store = createStore(reducer, applyMiddleware(...combineMiddleware));

export default store;
