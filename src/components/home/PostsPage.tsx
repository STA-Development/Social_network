import Navbar from './navbar/Navbar';
import './PostPage.css';
import Box from '@mui/material/Box';
import happy from '../../images/happy.jpg';
import happy2 from '../../images/happy2.jpg';
import happy3 from '../../images/happy3.jpg';
import * as React from 'react';
import Typography from '@mui/material/Typography';

const PostsPage = () => {
  return (
    <Box>
      <Navbar />
      <Box className='screen'>
        <Box>
          <Typography variant='h3' className='textDesign'>
            share your life with others !
          </Typography>
        </Box>
        <Box className='imageParent'>
          <Box className='backgroundImage'>
            <img className='firstImg-design' src={happy2} alt='happy' />
            <Typography className='text-comment'>
              To forget how to dig the earth and to tend the soil is to forget ourselves.
            </Typography>
          </Box>
          <Box className='backgroundImage'>
            <img className='secondImg-design2' src={happy} alt='happy' />
            <Typography className='text-comment2'>
              The moments of happiness we enjoy take us by surprise. It is not that we seize them,
              but that they seize us.
            </Typography>
          </Box>
          <Box className='backgroundImage'>
            <img className='thirdImg-design3' src={happy3} alt='happy' />
            <Typography className='text-comment3'>
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
