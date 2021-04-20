import axios from 'axios';

const api = axios.create({
  baseURL: '',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Credentials': '*',
  },
});

export default api;
