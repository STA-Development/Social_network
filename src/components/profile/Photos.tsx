import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { PhotoDiv, PhotosDisplay } from '../../assets/styles/ProfileBody.style';
import { ContextValue, UserContext } from '../../assets/context/userContext';
import { useContext } from 'react';

const Photos = () => {
  const { userPhoto } = useContext(UserContext) as ContextValue;

  return (
    <Box>
      <Box sx={{ alignItems: 'center' }}>
        <PhotoDiv>
          <Box sx={{ padding: '20px 10px' }}>
            <Typography variant='h5' component='h2' sx={{ fontFamily: 'sans-serif' }}>
              Photos
            </Typography>
          </Box>
          <Box sx={{ paddingTop: '5px' }}></Box>
          <PhotosDisplay>
            <ImageList sx={{ width: 500, height: 200 }} cols={3} rowHeight={200}>
              <>
                {userPhoto?.map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      style={{ display: 'block', borderRadius: '20px' }}
                      width='160px'
                      height='140px'
                      key={index}
                      alt={item.photo}
                      src={`${process.env.REACT_APP_URL}${item.photo}`}
                    />
                  </ImageListItem>
                ))}
              </>
            </ImageList>
          </PhotosDisplay>
        </PhotoDiv>
        <Box sx={{ padding: '6px' }}></Box>
      </Box>
    </Box>
  );
};
export default Photos;
