import {LOGIN_DATA, SIGNUP_DATA} from '../types/auth';
import {Dispatch} from 'redux';
import {IReduxState} from './../reducer/index';
import * as API from '../../api/auth';

// export const SignUp = ( ) => {
//     return dispatch => {
//         returnToDispatch(dispatch,SIGNUP_DATA.SIGNUP_START);
//         setTimeout(() => {
//             returnToDispatch(dispatch,SIGNUP_DATA.SIGNUP_SUCCESS);
//         }, 1500);
//         returnToDispatch(dispatch,SIGNUP_DATA.SIGNUP_STOP);
//     }
// }

export const SignUp = (request: any) => async (
  dispatch: Dispatch,
  store: IReduxState,
) => {
  try {
    dispatch({type: SIGNUP_DATA.SIGNUP_START});
    const data = await API.signup(request);
    if (data) {
      dispatch({
        type: SIGNUP_DATA.SIGNUP_SUCCESS,
      });
    }
  } catch (error) {
    dispatch({
      type: SIGNUP_DATA.SIGNUP_STOP,
      payload: error,
    });
  }
};

export const LogIn = () => async (dispatch: Dispatch, store: IReduxState) => {
  try {
    dispatch({type: LOGIN_DATA.LOGIN_START});
    const data = await API.login();
    if (data) {
      dispatch({
        type: LOGIN_DATA.LOGIN_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_DATA.LOGIN_STOP,
      payload: error,
    });
  }
};

// returnToDispatch = (dispatch : Dispatch, type : string, payload : {})  => {
//     dispatch({
//       type: type,
//       payload: payload,
//     });
//   };
