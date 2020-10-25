import {
  SET_LOADING,
  SET_ERROR_REQUEST,
  SET_SUCCESS_REQUEST,
  SET_USERS_LIST,
  SET_SEARCH_KEY,
} from '../actions/app';

const initialState = {
  isLoading: false,
  requestError: false,
  requestSuccess: false,
  usersList: null,
  searchKey: null,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS_LIST:
      return {
        ...state,
        usersList: [...payload],
      };

    case SET_SEARCH_KEY:
      return {
        ...state,
        searchKey: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    case SET_ERROR_REQUEST:
      return {
        ...state,
        requestError: payload,
      };

    case SET_SUCCESS_REQUEST:
      return {
        ...state,
        requestSuccess: payload,
      };

    default:
      return state;
  }
};

export { appReducer };
