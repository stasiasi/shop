import axios from 'axios';

const configOptions = {
  baseURL: 'https://dummyjson.com',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
};

const axiosInstance = axios.create(configOptions);

export default axiosInstance;