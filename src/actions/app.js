import { axios } from '../app/axiosConfig';
import { history } from '../app/history';

export const SET_USERS_LIST = 'SET_USERS_LIST';
export const SET_SEARCH_KEY = 'SET_SEARCH_KEY';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR_REQUEST = 'SET_ERROR_REQUEST';
export const SET_SUCCESS_REQUEST = 'SET_SUCCESS_REQUEST';

export const setUsersList = (users) => ({
  type: SET_USERS_LIST,
  payload: users,
});

export const setSearchKey = (key) => ({
  type: SET_SEARCH_KEY,
  payload: key,
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const setErrorRequest = (status) => ({
  type: SET_ERROR_REQUEST,
  payload: status,
});

export const setSuccessRequest = (status) => ({
  type: SET_SUCCESS_REQUEST,
  payload: status,
});

export const login = async (dispatch, userCredentials) => {
  dispatch(setLoading(true));
  try {
    const {
      data: { token },
    } = await axios.post('/api-token-auth/', userCredentials);
    localStorage.setItem('authToken', token);
    dispatch(setErrorRequest(false));
    history.push('/users-list');
  } catch (e) {
    dispatch(setErrorRequest(true));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addUser = async (dispatch, userCredentials) => {
  dispatch(setLoading(true));
  const token = localStorage.getItem('authToken');
  try {
    await axios.post('/api/v1/users/', userCredentials, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    dispatch(setErrorRequest(false));
    dispatch(setSuccessRequest(true));
  } catch (e) {
    dispatch(setErrorRequest(true));
    dispatch(setSuccessRequest(false));
  } finally {
    dispatch(setLoading(false));
  }
};

export const loadUsers = async (dispatch) => {
  dispatch(setLoading(true));
  const token = localStorage.getItem('authToken');
  try {
    const { data } = await axios.get('/api/v1/users/', {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    dispatch(setUsersList(data));
    dispatch(setErrorRequest(false));
  } catch (e) {
    dispatch(setErrorRequest(true));
  } finally {
    dispatch(setLoading(false));
  }
};
