import axios from './fileToken';
import axiosText from './quotesToken';

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
export const getUsersPosts = async (take = 2) => {
  const page = 1;
  return await axiosText.get(
    `${process.env.REACT_APP_URL}/api/usersInformation/showPosts?take=${take}&skip=${page}`,
  );
};
export const deletePost = async (id: number) => {
  return await axios.delete(`${process.env.REACT_APP_URL}/api/usersInformation/deleted/${id}`);
};
