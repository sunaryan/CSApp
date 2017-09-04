//Responsible for
//email, password, error, loading, loggedIn or LoggedOut handling
//For all things related to Authentication
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  CREATE_USER,
} from '../utilities/types';

const INITIAL_STATE = {
  email: 'demo@success4.us',
  pwd: 'Admin1234',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
        return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
        return { ...state, pwd: action.payload };
    case LOGIN_USER:
        return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
        return {
          ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed.', pwd: '', loading: false };
    case CREATE_USER:
        return { ...state, loading: false, error: '' };
    default:
        return state;
  }
};
