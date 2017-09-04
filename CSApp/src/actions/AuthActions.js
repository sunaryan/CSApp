import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import utilities from './../utilities/utilities';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  USER_DATA,
  TOKEN_PREFIX,
} from './../utilities/types';
import { LOGIN_URL } from './../utilities/constants';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, pwd }) => {
  console.log('login url: ', LOGIN_URL);//LOGIN_URL
  console.log('check', email, pwd);
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    axios.post(LOGIN_URL, { username: email, password: pwd })
      .then(async (user) => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};

const loginUserSuccess = (dispatch, user) => {
  console.log('success', user.data.token);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  utilities.setAsyncStorageData(USER_DATA, `${TOKEN_PREFIX} ${user.data.token}`);
  Actions.main();
};
