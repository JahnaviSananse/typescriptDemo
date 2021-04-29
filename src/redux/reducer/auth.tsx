import {SIGNUP_DATA} from '../types/auth';
import {LOGIN_DATA} from './../types/auth';
const initial_state = {
  isLoading: false,
  loginData: [],
  error: [],
};

export default (
  state = initial_state,
  action: IReduxAction,
): typeof initial_state => {
  switch (action.type) {
    case SIGNUP_DATA.SIGNUP_START:
    case LOGIN_DATA.LOGIN_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGNUP_DATA.SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case LOGIN_DATA.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        loginData: action.payload,
      };
    }
    case SIGNUP_DATA.SIGNUP_STOP:
    case LOGIN_DATA.LOGIN_STOP: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
