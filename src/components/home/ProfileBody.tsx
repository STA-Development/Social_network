import Photos from "./Photos";
import Posts from "./Posts";
import Friends from "./Friends";
import Quotes from "./Quotes";
import {BodyDiv} from "../../assets/styles/ProfileBody.style";
import {UserInfo} from "../../assets/modal/modal";
import {UsersPhoto} from "../model/model";
import * as React from "react";
import {Dispatch} from "react";
import {Box} from "@mui/material";
type Props = {
    userInfo : UserInfo | undefined;
    userPhoto : UsersPhoto[] | undefined;
    setUserPhoto: Dispatch<React.SetStateAction<UsersPhoto[]>>
    selectedImage: FileList | undefined
    uploadImage: string
    setUploadImage : Dispatch<React.SetStateAction<string>>
    setSelectedImage :Dispatch<React.SetStateAction<FileList | undefined>>
}
const ProfileBody = ({userInfo, userPhoto, setUserPhoto, uploadImage, selectedImage , setUploadImage, setSelectedImage} : Props) => {
    return (
        <BodyDiv>
            <Box>
                <Friends/>
                <Box sx={{marginTop: '30px'}}><Photos userPhoto = {userPhoto} setUserPhoto = {setUserPhoto}/></Box>
            </Box>
            <Box>
                <Quotes userInfo={userInfo} userPhoto={userPhoto} setUserPhoto={setUserPhoto} selectedImage={selectedImage} uploadImage={uploadImage} setUploadImage={setUploadImage}
                        setSelectedImage = {setSelectedImage}/>
                <Box sx={{marginTop: '30px'}}><Posts/></Box>
            </Box>

        </BodyDiv>
    )
}
export default ProfileBody;