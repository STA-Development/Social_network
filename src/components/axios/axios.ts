import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    'Content-Type': 'text/json',
  },
});
instance.interceptors.request.use((config) => {
  const token = localStorage.accessToken;
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}` || '';
  }
  return config;
});
export const updateProfile = async(token : string) => {
return await axios.patch(`http://localhost:5000/api/usersInformation/public${token}/profile/images/`)
}
