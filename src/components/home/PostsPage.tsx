import Navbar from './navbar/Navbar';
import Box from '@mui/material/Box';
import { Friends } from '../../assets/images/Friends';
import { Nature } from '../../assets/images/Nature';
import { Happy } from '../../assets/images/Happy';
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
            <Friends />
            <Typography sx={{ width: '300px', height: '250px', fontSize: '20px' }}>
              To forget how to dig the earth and to tend the soil is to forget ourselves.
            </Typography>
          </Box>
          <Box>
            <Nature />
            <Typography sx={{ width: '400px', height: '350px', fontSize: '20px' }}>
              The moments of happiness we enjoy take us by surprise. It is not that we seize them,
              but that they seize us.
            </Typography>
          </Box>
          <Box className='backgroundImage'>
            <Happy />
            <Typography sx={{ width: '300px', height: '250px', fontSize: '20px' }}>
              The good you do today will be forgotten tomorrow. Do good anyway.
            </Typography>
          </Box>
        </Box>
        <Box className='AddButton'></Box>
      </Box>
    </Box>
  );
};
export default PostsPage;
