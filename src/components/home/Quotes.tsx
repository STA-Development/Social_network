import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Divider } from "@mui/material";
import * as React from "react";
import {UserInfo} from "../../assets/modal/modal";
import Button from "@mui/material/Button";
import {UsersPhoto} from "../model/model";
import DeleteIcon from '@mui/icons-material/Delete';
import {Dispatch} from "react";
import {PrevPhotosDiv, TextPost, UploadDiv, UploadImage} from "../../assets/styles/ProfileBody.style";

type Props = {
userInfo : UserInfo | undefined;
userPhoto : UsersPhoto[] | undefined
    setUserPhoto: Dispatch<React.SetStateAction<UsersPhoto[]>>
    selectedImage:  FileList | undefined
    uploadImage: string
    setUploadImage : Dispatch<React.SetStateAction<string>>
    setSelectedImage : Dispatch<React.SetStateAction<FileList | undefined>>
}
const Quotes = ({userInfo, selectedImage, setSelectedImage } : Props) => {

    const handlePreview = async (event :  React.ChangeEvent<HTMLInputElement> ) => {
        const files = event.target.files;
        if (files) {
            const fileList = new DataTransfer();
            const arraysFiles = Array.from(files).map((item ) => item)
            arraysFiles.map((item) => {
                fileList.items.add(item)
            })
            if(selectedImage && selectedImage) {
                const arrays = Array.from(selectedImage).map((item) => item)
                arrays.map((item) => {
                    fileList.items.add(item)
                })
            }

            setSelectedImage(fileList.files)
        }
    }


    const handleClickDeletePicture = (indexProp : number) => {
        if(selectedImage && selectedImage){
            const removedId = Array.from(selectedImage).filter((_,index ) => index !== indexProp)
            const fileList = new DataTransfer();
            removedId.map((item) => {
                fileList.items.add(item)
            })
            setSelectedImage(fileList.files)
        }
    }

    return (
              <UploadDiv>
                  <Box sx={{padding : '20px 10px'}}>
                      <Box sx={{display : 'flex', gap:'10px'}}>
                          <Avatar src = {`${process.env.REACT_APP_URL}${userInfo?.profileImage}`}/>
                          <TextPost />
                      </Box>
                      <Box><Divider sx={{paddingTop:"20px"}} />
                          <Box>
                              <Button variant="contained"  aria-label="upload picture" component="label" sx={{width : "100%"}} >
                                  <input hidden accept="image/*" multiple type="file" name="attr"  onChange= {handlePreview } />
                                  upload images
                              </Button>
                          </Box>
                      </Box>
                      <Box sx={{paddingTop: "20px"}}></Box>
                      <PrevPhotosDiv>
                              {selectedImage && selectedImage && [...Array(selectedImage.length)].map((_, index) => selectedImage && selectedImage[index] && (
                                  <Box sx={{position : 'relative'}}>
                                      <img style={{borderRadius : '20px'}} width="200px" height="200px" src={URL.createObjectURL(selectedImage[index])}/>

                                      <UploadImage key={index} onClick={() => handleClickDeletePicture(index)}>

                                          <DeleteIcon sx={{width : '100%'}} color='error'/>

                                      </UploadImage>
                                  </Box>
                              ))}

                      </PrevPhotosDiv>
                  </Box>
              </UploadDiv>
    )
}
export default Quotes;