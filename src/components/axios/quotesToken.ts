import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
instance.interceptors.request.use((config) => {
  const token = localStorage.accessToken;
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}` || '';
  }
  return config;
});

export default instance;
