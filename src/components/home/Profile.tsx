import * as React from 'react';
import Box from '@mui/material/Box';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Divider } from "@mui/material";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {CoverImage, ProfileImage , CameraIcon , AddPost , HeaderName} from "../../assets/styles/profile.style";
import { useState} from "react";
import axios from "axios";
import { justifyContent, margin, position } from "../../assets/variables";
import {display} from "../../assets/variables";
const ProfilePage = () => {
    const [userInfo, setuserInfo] = useState<Blob | MediaSource>(new Blob([], {}))


    // const handleSubmit = async (e:any) => {
    //     e.preventDefault()
    //     let formData = new FormData()
    //     formData.append('file', userInfo)
    //     await fetch('http://localhost:5000/api/usersInformation/profile/images', {
    //         method: 'POST',
    //         body: formData,
    //     })
    // }
    //
    // const handleInputChange = (e: any) => {
    //     const img = {
    //         preview: URL.createObjectURL(e.target.files[0]),
    //         data: e.target.files[0],
    //     }
    //     setuserInfo(img)
    // }

    const handleInputChange = (e : any)=> {
        setuserInfo(e.target.files[0]);
    }

    const handleSubmit = async () => {
        const formdata = new FormData();
        formdata.append('ProfileImg', userInfo as Blob)
        await axios.post("http://localhost:5000/api/usersInformation/profile/images", formdata, {
            headers: {"Content-Type": "multipart/form-data"}
        }).then(res => {console.warn(res)});
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
                    </CoverImage>
                </Box>
                <Box sx={{ width: '100%'}}>
                    <Box sx={{width: '80%', margin: margin.auto}}>
                        <Box sx={{width: '100%', position: position.relative, height: '200px'}}>
                            <Box  sx={{position: 'absolute', right: 30, top: '-50px'}}>
                                <input hidden accept="image/*"  type="file" />
                                <Button variant="contained" component="label" sx={{ color: "#21130d", backgroundColor: "#ffffff","&:hover" : {backgroundColor: "#ffffff"},fontFamily: "sans-serif" }} >Add Cover Photo
                                </Button>
                            </Box>
                            <Box sx={{position: position.absolute, top: '-35px', left: '50px' }}>
                                <ProfileImage src="/broken-image.jpg"  />
                                <CameraIcon >
                                    <IconButton sx={{ color: "#21130d" }}  aria-label="upload picture" component="label" onChange={handleSubmit}  >
                                        <input hidden accept="image/*" type="file" name="attr"  onChange={handleInputChange} />
                                        <CameraAltIcon/>
                                    </IconButton>
                                </CameraIcon>
                            </Box>
                            <AddPost>
                                <Button variant="contained" component="label">+ Add Post<input hidden accept="image/*" multiple type="file" />
                                </Button>
                            </AddPost>

                            <Box>
                                <HeaderName variant="h3"> Name and SureName</HeaderName>
                            </Box>
                        </Box>
                        <Box sx={{margin: margin.auto}}><Divider /></Box>

                    </Box>
                </Box>
            </Box>

        </Box>

    )

}
export default ProfilePage