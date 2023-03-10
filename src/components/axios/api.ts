import axios from './fileToken';
import axiosText from './quotesToken';
export type quotesType = {
  id: number;
  userId: number;
  quotes: string;
};

export const updateProfile = async (formData: FormData) => {
  return await axios.patch(`${process.env.REACT_APP_URL}/api/usersInformation/profile`, formData);
};
export const updateCover = async (formData: FormData) => {
  return await axios.patch(`${process.env.REACT_APP_URL}/api/usersInformation/cover`, formData);
};
export const getProfileUser = async () => {
  return await axios.get(`${process.env.REACT_APP_URL}/api/usersInformation/user`);
};
export const creatPhotos = async (formData: FormData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_URL}/api/usersInformation/photos`,
    formData,
  );
  return response;
};
export const getUserPhotos = async () => {
  return await axios.get(`${process.env.REACT_APP_URL}/api/usersInformation/photo`);
};
export const getLimitedPhotos = async () => {
  return await axios.get(`${process.env.REACT_APP_URL}/api/usersInformation/limitedPhotos`);
};
export const getUsersPosts = async () => {
  return await axiosText.get(`${process.env.REACT_APP_URL}/api/usersInformation/showPosts`);
};
