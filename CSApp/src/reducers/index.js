import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AccountsReducer from './AccountsReducer';

export default combineReducers({
  auth: AuthReducer,
  accounts: AccountsReducer,
});
