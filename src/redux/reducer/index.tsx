import {combineReducers} from 'redux';
import AuthReducer from './auth';
import PostReducer from './post';

const reducers = {
  auth: AuthReducer,
  post: PostReducer,
};

const combinedReducer = combineReducers(reducers);

export interface IReduxState {
  auth: ReturnType<typeof AuthReducer>;
  post: ReturnType<typeof PostReducer>;
}

export default combinedReducer;
