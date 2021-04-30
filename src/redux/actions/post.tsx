import {LoadPost, ItemPost} from '../types/post';
import {Dispatch} from 'redux';
import {IReduxState} from './../reducer/index';
import * as API from '../../api/auth';

export const DataList = () => async (
  dispatch: Dispatch,
  store: IReduxState,
) => {
  try {
    dispatch({type: LoadPost.LOADPOST_START});
    const data = await API.login();
    if (data) {
      dispatch({
        type: LoadPost.LOADPOST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: LoadPost.LOADPOST_FAIL,
      payload: error,
    });
  }
};

export const DataPost = (req: any) => async (
  dispatch: Dispatch,
  store: IReduxState,
) => {
  try {
    dispatch({type: ItemPost.ITEMPOST_START});
    const data = await API.postData(req);
    if (data) {
      dispatch({
        type: ItemPost.ITEMPOST_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: ItemPost.ITEMPOST_FAIL,
      payload: error,
    });
  }
};
