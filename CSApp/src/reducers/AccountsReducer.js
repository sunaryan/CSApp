import {
  ACCOUNTS_KPI_FETCH_SUCCESS,
  LOADING,
} from '../utilities/types';

const INITIAL_STATE = {
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCOUNTS_KPI_FETCH_SUCCESS:
      return { ...state, loading: true, payload: action.payload };
    case LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
