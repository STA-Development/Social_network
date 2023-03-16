import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { PhotoDiv } from '../../assets/styles/ProfileBody.style';
import { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import { ContextValue, UserContext } from '../../assets/context/userContext';

const Photos = () => {
  const { photos } = useContext(UserContext) as ContextValue;
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
          <PhotoProvider>
            <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {photos?.map((item, index) => (
                <PhotoView key={index} src={`${process.env.REACT_APP_URL}${item.photo}`}>
                  <img
                    style={{ borderRadius: '20px' }}
                    width='104.67px'
                    height='105px'
                    alt={item.photo}
                    src={`${process.env.REACT_APP_URL}${item.photo}`}
                  />
                </PhotoView>
              ))}
            </Box>
          </PhotoProvider>
        </PhotoDiv>
        <Box sx={{ padding: '6px' }}></Box>
      </Box>
    </Box>
  );
};
export default Photos;
