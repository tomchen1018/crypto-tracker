import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootWatchers from './sagas/rootSaga';
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    (applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootWatchers);
  return store;
}

export const store = configureStore();
