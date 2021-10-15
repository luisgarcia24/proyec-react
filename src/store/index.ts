import * as reduxModule from 'redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import thunk from 'redux-thunk';
import reducers from './reducers';

// @ts-ignore
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/INIT';
// @ts-ignore
const composeEnhancers = process.env.NODE_ENV !== 'productions' && typeof window === 'object' &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

let middleware = null;

if (process.env.NODE_ENV === `development`) middleware = [thunk];
else middleware = [thunk];

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(enableBatching(reducers), enhancer);

export default { store };

