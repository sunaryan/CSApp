import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { ACCOUNTS_INFO_URL, ACCOUNTS_KPI_URL } from './../utilities/constants';

import { ACCOUNTS_KPI_FETCH_SUCCESS } from './../utilities/types';

export const accountsFetch = (data) => {
  console.log('value to fetch get here');
  try {
    const config = {
      headers: { Authorization: data }
    };
    return dispatch => {
      axios.get(ACCOUNTS_KPI_URL, config)
      .then(response => {
        console.log('value of response: ', response.data.data);
        dispatch({
          type: ACCOUNTS_KPI_FETCH_SUCCESS,
          payload: response.data.data,
        });
      });
    };
  } catch (error) {
    console.log('value of response is error');
  }
};
