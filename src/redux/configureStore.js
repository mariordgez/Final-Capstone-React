import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import loginPageReducer from './login/loginAction';
import { detailReducer } from './detailReducer';
import carListSlice from './car_list/carListSlice';
import addNewCarForm from './car_list/addNewCarFormSlice';
import deleteCarsReducer from './delete/deleteAction';

const combineMiddleware = [thunk, logger];

const reducer = combineReducers({
  carList: carListSlice.reducer,
  loginPage: loginPageReducer,
  addNewCarForm: addNewCarForm.reducer,
  detailState: detailReducer,
  deletePage: deleteCarsReducer,
});

const store = createStore(reducer, applyMiddleware(...combineMiddleware));
export default store;
