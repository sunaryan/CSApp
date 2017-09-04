import axios from 'axios';
import { ACCOUNTS_KPI_URL, ACCOUNTS_INFO_URL } from './constants';

export default (() => {
  const getAccountsKPIData = (token) => {
    console.log('value of TOKEN: ', token);
    console.log('value of ACCOUNTS_KPI_URL: ', ACCOUNTS_KPI_URL);
    try {
      const config = {
        headers: { Authorization: token }
      };
      return axios.get(ACCOUNTS_KPI_URL, config);
    } catch (error) {
      console.log('value of response is error');
    }
  };

  const getAccountsInfoData = (token) => {
    console.log('value of TOKEN: ', token);
    console.log('value of ACCOUNTS_INFO_URL: ', ACCOUNTS_INFO_URL);
    try {
      const config = {
        headers: { Authorization: token }
      };

      return axios.get(ACCOUNTS_INFO_URL, config);
    } catch (error) {
      console.log('value of response is error');
    }
  };

  const getAccountsUserKPIData = (token) => {
    console.log('value of TOKEN: ', token);
    console.log('value of ACCOUNTS_INFO_URL: ', ACCOUNTS_INFO_URL);
    try {
      const config = {
        headers: { Authorization: token }
      };

      return axios.get(ACCOUNTS_INFO_URL, config);
    } catch (error) {
      console.log('value of response is error');
    }
  };

  return {
    getAccountsKPIData,
    getAccountsInfoData
  };
})();
