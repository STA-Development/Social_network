import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ContextValue, UserContext } from '../../../assets/context/userContext';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import { createUserPosts, getUsersPosts } from '../../axios/api';
import { useContext, useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TextModal = () => {
  const { open, handleClose, userInfo, setQuotes } = useContext(UserContext) as ContextValue;
  const [text, setText] = useState<string>('');
  console.log(text, 'text');
  const handleClickPosts = async () => {
    await createUserPosts(text);
    const data = await getUsersPosts();
    setQuotes(data.data);
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Box sx={{ paddingLeft: '90%' }}>
            <Button onClick={handleClose}>
              <CloseIcon sx={{ color: 'red' }} />
            </Button>
          </Box>
          <Box>
            <Typography
              id='modal-modal-title'
              variant='h5'
              component='h1'
              sx={{ paddingLeft: '30%', fontFamily: 'sans-serif' }}
            >
              Create a Post
            </Typography>
          </Box>
          <Divider sx={{ paddingTop: '20px' }} />
          <Box sx={{ paddingTop: '20px' }}></Box>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Box>
              <Avatar src={`${process.env.REACT_APP_URL}${userInfo?.profileImage}`} />
            </Box>
            <Box>
              <Typography
                id='modal-modal-title'
                variant='h6'
                component='h4'
                sx={{ fontFamily: 'sans-serif' }}
              >
                {userInfo && userInfo.first_name} {userInfo && userInfo.last_name}
              </Typography>
            </Box>
            <Box sx={{ paddingTop: '20px' }}></Box>
          </Box>
          <Box>
            <Box sx={{ paddingTop: '20px' }}></Box>
            <label>
              <textarea
                placeholder="What's on your mind ?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                  width: '400px',
                  height: '200px',
                  resize: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontFamily: 'sans-serif',
                }}
              />
            </label>
          </Box>
          <Box>
            <Button
              onClick={handleClickPosts}
              variant='contained'
              aria-label='upload picture'
              component='label'
              sx={{ width: '100%' }}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default TextModal;
