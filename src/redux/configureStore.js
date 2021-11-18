import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const combineMiddleware = [thunk, logger];

const reducer = combineReducers({
  detail: detailReducer,
});

const store = createStore(reducer, applyMiddleware(...combineMiddleware));

export default store;
