import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import carListSlice from './car_list/carListSlice';
import addNewCarForm from './car_list/addNewCarFormSlice';

const combineMiddleware = [thunk, logger];

const reducer = combineReducers({
  carList: carListSlice.reducer,
  addNewCarForm: addNewCarForm.reducer,
});

const store = createStore(reducer, applyMiddleware(...combineMiddleware));
export default store;
