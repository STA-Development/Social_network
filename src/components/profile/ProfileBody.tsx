import Photos from './Photos';
import Posts from './Posts';
import Friends from './Friends';
import Quotes from './Quotes';
import { BodyDiv } from '../../assets/styles/ProfileBody.style';
import * as React from 'react';
import { Box } from '@mui/material';
const ProfileBody = () => {
  return (
    <BodyDiv>
      <Box sx={{ position: 'sticky', top: '0' }}>
        <Friends />
        <Box sx={{ marginTop: '30px' }}>
          <Photos />
        </Box>
      </Box>
      <Box>
        <Quotes />
        <Box sx={{ marginTop: '30px' }}>
          <Posts />
        </Box>
      </Box>
    </BodyDiv>
  );
};
export default ProfileBody;
