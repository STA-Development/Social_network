import * as React from 'react';
import Box from '@mui/material/Box';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Divider } from "@mui/material";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {CoverImage, ProfileImage, CameraIcon, AddPost, HeaderName, CoverImg} from "../../assets/styles/profile.style";
import {UserInfo} from "../../assets/modal/modal";
import { justifyContent, margin, position } from "../../assets/variables";
import {display} from "../../assets/variables";
import {updateCover, updateProfile, getProfileUser, getUserPhotos, creatPhotos} from "../axios/api";
import {UsersPhoto} from "../model/model";
import {useEffect, useState} from "react";
import ProfileBody from "./ProfileBody";
const ProfilePage = () => {
   const [userInfo, setUserInfo] = useState<UserInfo>();
   const [userPhoto, setUserPhoto] = useState<UsersPhoto[]>([]);
    const [selectedImage, setSelectedImage] = useState<FileList | undefined>()
    const [uploadImage, setUploadImage] = useState<string>('')

    const handleProfileInputChange = async ( )=> {
        const formData = new FormData();
        await updateProfile(formData)
        await getProfileData()
    }
    const handleCoverSubmit = async (e : any) => {
        const formData = new FormData();
        formData.append('CoverImg', e.target.files[0] as Blob)
        await updateCover(formData)
        await getProfileData()
    }
    const handleSendPhoto = async () => {
        if (selectedImage) {
            const formData = new FormData();
            const image = selectedImage.length;
            for (let i = 0; i < image; i++) {
                if (selectedImage) {
                    formData.append('userPhoto', selectedImage[i]);
                }
            }
            await creatPhotos(formData);
            await getProfileData()
            setSelectedImage(undefined)
        }
    }

    useEffect(()=>{
        (async () => {
            await getProfileData();
        })();
        },[]);
   const getProfileData = async () => {
       try {
           const response = await getProfileUser();
           const PhotoResponse = await getUserPhotos();
           setUserInfo(response.data);
           setUserPhoto(PhotoResponse.data);
       }
       catch(error) {
          return error;
       }
   }

    return (
        <Box>
            <Box  sx={{
                display : display.flex,
                justifyContent : justifyContent.center,
                flexDirection: display.flexDirectionColumns,
            }}>
                <Box sx={{width: '100%'}}>
                    <CoverImage>
<CoverImg src = {`${process.env.REACT_APP_URL}${userInfo?.coverImage}`} />
                    </CoverImage>
                </Box>
                <Box sx={{ width: '100%'}}>
                    <Box sx={{width: '80%', margin: margin.auto}}>
                        <Box sx={{width: '100%', position: position.relative, height: '200px'}}>
                            <Box  sx={{position: 'absolute', right: 30, top: '-50px'}}>
                                <input hidden accept="image/*"  type="file" />
                                <Button variant="contained"  aria-label="upload picture" component="label" sx={{color: "#21130d", backgroundColor: "#ffffff","&:hover" : {backgroundColor: "#ffffff"},fontFamily: "sans-serif"}}  >Add Cover Photo
                                    <input hidden accept="image/*" type="file" name="attr"  onChange={handleCoverSubmit} />
                                </Button>
                            </Box>
                            <Box sx={{position: position.absolute, top: '-35px', left: '50px' }}>
                                <ProfileImage src = {`${process.env.REACT_APP_URL}${userInfo?.profileImage}`}/>
                                <CameraIcon >
                                    <IconButton sx={{ color: "#21130d" }}  aria-label="upload picture" component="label"  >
                                        <input hidden accept="image/*" type="file" name="attr"  onChange={handleProfileInputChange} />
                                        <CameraAltIcon/>
                                    </IconButton>
                                </CameraIcon>
                            </Box>
                            <AddPost>
                                <Button onClick={handleSendPhoto} variant="contained" component="label" >

                                    Add Post
                                </Button>
                            </AddPost>

                            <Box>
                                    <HeaderName  variant="h3"> {userInfo && userInfo.first_name} {userInfo && userInfo.last_name}</HeaderName>
                                </Box>
                        </Box>
                        <Box sx={{margin: margin.auto}}><Divider /></Box>
                    </Box>
                    <Box>
                        <ProfileBody userInfo={userInfo} userPhoto={userPhoto}  setUserPhoto={setUserPhoto} selectedImage={selectedImage} uploadImage={uploadImage} setUploadImage ={setUploadImage} setSelectedImage = {setSelectedImage}/>
                    </Box>
                </Box>
            </Box>
        </Box>

    )

}
export default ProfilePage