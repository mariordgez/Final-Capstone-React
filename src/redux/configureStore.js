// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { detailReducer } from './detailReducer';

// const combineMiddleware = [thunk, logger];

// const reducer = combineReducers({
//   detail: detailReducer,
// });

// const store = createStore(reducer, applyMiddleware(...combineMiddleware));

// export default store;

import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';

// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { detailReducer } from './detailReducer';

const reducer = combineReducers({
  detailState: detailReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
