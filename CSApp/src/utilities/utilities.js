import { AsyncStorage } from 'react-native';

export default (() => {
  const setAsyncStorageData = (key, value) => {
    try {
      AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const getAsyncStorageData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return {
    setAsyncStorageData,
    getAsyncStorageData
  };
})();
