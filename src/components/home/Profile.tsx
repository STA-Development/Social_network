import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Divider } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import { borders, colors, justifyContent, margin, position } from "../../assets/variables";
import {display} from "../../assets/variables";
const ProfilePage = () => {
  const coverImage = {
    width: '80%',
    height: 500,
    backgroundColor: colors.lightGray,
    borderRadius: borders.coverRadius,
    display : display.grid,
    gridTemplateColumns:'20px 20px 20px',
    margin: margin.auto,
  }
  const profileImage = {
    width: 180,
    height: 180,
    borderRadius: borders.circleRadius ,
  }
  const cameraIcon = {
    width: 40,
    height: 40,
    borderRadius:borders.circleRadius,
    marginLeft : margin.cameraLeft,
    backgroundColor:colors.lightGray,
    position: position.absolute,
    bottom: 20,
    right: 3,
  }
  const AddPost = {
    position: position.absolute, bottom: 50, right: 30, margin:margin.auto,
    fontFamily: "sans-serif"
  }
  return (
    <Box>
    <Box  sx={{
      display : display.flex,
      justifyContent : justifyContent.center,
      flexDirection: display.flexDirectionColumns,
    }}>
       <Box sx={{width: '100%'}}>
         <Box
          sx={{
           ...coverImage
          }}
        />
       </Box>
       <Box sx={{ width: '100%'}}>
         <Box sx={{width: '80%', margin: margin.auto}}>
           <Box sx={{width: '100%', position: position.relative, height: '200px'}}>
             <Box  sx={{position: 'absolute', right: 30, top: '-50px'}}>
               <Button variant="contained" component="label" sx={{ color: "#21130d", backgroundColor: "#ffffff","&:hover" : {backgroundColor: "#ffffff"},fontFamily: "sans-serif" }}   >Add Cover Photo<input hidden accept="image/*" multiple type="file" /></Button>
             </Box>
             <Box sx={{position: position.absolute, top: '-35px', left: '50px' }}>
                 <Avatar   sx={{
  ...profileImage
               }} src="/broken-image.jpg" />
               <Avatar   sx={{
              ...cameraIcon
               }} >
                 <IconButton sx={{ color: "#21130d" }}  aria-label="upload picture" component="label">
                   <input hidden accept="image/*" type="file" />
                 <CameraAltIcon/>
                 </IconButton>
               </Avatar>
             </Box>
             <Box sx={{...AddPost }} >
               <Button variant="contained" component="label">+ Add Post<input hidden accept="image/*" multiple type="file" />
             </Button>
             </Box>

             <Box>
               <Typography variant="h3" sx={{position: position.absolute, left: '260px', top: '20px', fontFamily: "sans-serif"}}> Name and SureName</Typography>
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