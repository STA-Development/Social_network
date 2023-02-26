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
export const creatPhotos = async(formData :  FormData)=> {
  return await axios.post(`${process.env.REACT_APP_URL}/api/usersInformation/photos`, formData)
}
export const getUserPhotos = async()=> {
  return await axios.get(`${process.env.REACT_APP_URL}/api/usersInformation/photo`)
}
export const deleteUserPhoto = async(id:number)=>{
  return await axios.delete(`${process.env.REACT_APP_URL}/api/usersInformation/deleted/${id}`,)
}