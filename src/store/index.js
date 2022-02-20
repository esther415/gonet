// store.js
import { createStore, applyMiddleware, compose } from "redux";
// import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import reducers from "./rootReducer";
import rootSaga from "./rootSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware, logger];
const middleware = [sagaMiddleware];
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);
export default store;
