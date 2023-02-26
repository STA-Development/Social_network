import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {UsersPhoto} from "../model/model";
import {Dispatch} from "react";
import * as React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {PhotoDiv, PhotosDisplay} from "../../assets/styles/ProfileBody.style";

type Props = {
    userPhoto : UsersPhoto[] | undefined ;
    setUserPhoto: Dispatch<React.SetStateAction<UsersPhoto[]>>
}
const Photos = ({userPhoto}:Props) => {

    return (
        <Box>
            <Box sx ={{alignItems:'center'}}>
           <PhotoDiv>
               <Box sx={{padding : '20px 10px'}}>
                   <Typography variant="h5" component="h2" sx={{fontFamily: "sans-serif"}}>
                       Photos
                   </Typography>
               </Box>
               <Box sx={{paddingTop: "20px"}}></Box>
               <PhotosDisplay>
                   <ImageList sx={{ width: 500, height: 'auto' }} cols={3} rowHeight={200}>
                   <>
                       {userPhoto?.map((item, index) =>(
                       <ImageListItem key={index}>
                       <img style={{display: 'block', borderRadius: '20px'}} width="160px" height="140px" key={index}
                                 alt={item.photo}
                                 src={`${process.env.REACT_APP_URL}${item.photo}`}/>
                       </ImageListItem>
                   ))}
                   </>
                   </ImageList>
               </PhotosDisplay>
           </PhotoDiv>
                <Box sx={{padding:"6px"}}>
                </Box>

            </Box>
        </Box>
    )
}
export default Photos;