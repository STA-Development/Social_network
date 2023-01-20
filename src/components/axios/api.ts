import axios from 'axios';
import { Users, loginUsers } from '../model/model';

export const createUsers = async (usersInfo: Users) => {
  return await axios.post('http://localhost:5000/api/usersInformation/signup', usersInfo);
};

export const login = async (usersInfo: loginUsers) => {
  return await axios.post('http://localhost:5000/api/usersInformation/login', usersInfo);
};
