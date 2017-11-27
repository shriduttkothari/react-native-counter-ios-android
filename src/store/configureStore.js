import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({ predicate: (getState, action) => true});


export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
     applyMiddleware(thunk,loggerMiddleware),
    
  );

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
