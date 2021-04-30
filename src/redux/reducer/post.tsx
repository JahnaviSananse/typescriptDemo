import {LoadPost, ItemPost} from '../types/post';

const initial_state = {
  dataRespones: null,
  PostResponse: null,
  isLoading: false,
  error: {},
};

export default (
  state = initial_state,
  action: IReduxAction,
): typeof initial_state => {
  switch (action.type) {
    case LoadPost.LOADPOST_START:
    case ItemPost.ITEMPOST_START:
      return {
        ...state,
        isLoading: true,
      };
    case LoadPost.LOADPOST_SUCCESS:
      return {
        ...state,
        dataRespones: action.payload,
        isLoading: false,
      };
    case ItemPost.ITEMPOST_SUCCESS:
      return {
        ...state,
        PostResponse: [...state.PostResponse, action.payload],
        isLoading: false,
      };
    case LoadPost.LOADPOST_FAIL:
    case ItemPost.ITEMPOST_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
