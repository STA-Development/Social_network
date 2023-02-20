import axios from './token';

export const updateProfile = async(formData: FormData) => {
  return await axios.patch(`${process.env.REACT_APP_URL}/api/usersInformation/profile`, formData)
}
export const updateCover = async(formData: FormData) => {
  return await axios.patch(`${process.env.REACT_APP_URL}/api/usersInformation/cover`, formData)
}
export const getProfileUser = async()=> {
  return await axios.get(`${process.env.REACT_APP_URL}/api/usersInformation/user`)
}