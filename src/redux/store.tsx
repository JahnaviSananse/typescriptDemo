import {createStore} from 'redux';
import {applyMiddleware} from 'redux'; //to track redux
import thunk from 'redux-thunk';
import  {logger}  from 'redux-logger'; //to track redux
import rootReducer from './reducer';
 

const configureStore = () => {
  const middleware = [];
  middleware.push(logger);
  middleware.push(thunk);
  return createStore(rootReducer, applyMiddleware(...middleware));
};

// Redux store type
export type AppState = ReturnType<typeof rootReducer>;

export default configureStore;