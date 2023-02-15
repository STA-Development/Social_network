import axios from 'axios';
import { Users, loginUsers } from '../model/model';

export const createUsers = async (usersInfo: Users) => {
  return await axios.post(`${process.env.REACT_APP_URL}usersInformation/signup`, usersInfo);
};

export const login = async (usersInfo: loginUsers , config : any) => {
  return await axios.post(`${process.env.REACT_APP_URL}usersInformation/login`, usersInfo);
};
