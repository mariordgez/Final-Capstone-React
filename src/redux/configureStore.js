import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import carListSlice from './homepage/carListSlice';
import loginPageReducer from './login/loginAction';

const combineMiddleware = [thunk, logger];

const reducer = combineReducers({
  carList: carListSlice.reducer,
  loginPage: loginPageReducer,
});

const store = createStore(reducer, applyMiddleware(...combineMiddleware));

export default store;
