import Navbar from './navbar/Navbar';
import Box from '@mui/material/Box';
import { FriendsImage } from '../../assets/images/Friends';
import { NatureHeaderImage } from '../../assets/images/Nature';
import { HappyHeaderImage } from '../../assets/images/Happy';
import * as React from 'react';
import Typography from '@mui/material/Typography';

const PostsPage = () => {
  const displayScreen = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  };
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          ...displayScreen,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '50px',
              color: '#1a5c55',
              fontFamily: 'Roboto , sans-serif',
            }}
          >
            share your life with others !
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <Box sx={{ width: '300px', height: '250px' }}>
            <FriendsImage />
          </Box>
          <Box>
            <NatureHeaderImage />
          </Box>
          <Box className='backgroundImage'>
            <HappyHeaderImage />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PostsPage;
