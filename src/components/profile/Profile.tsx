import * as React from 'react';
import Box from '@mui/material/Box';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {
  CoverImage,
  ProfileImage,
  CameraIcon,
  HeaderName,
  CoverImg,
} from '../../assets/styles/profile.style';
import { justifyContent, margin, position } from '../../assets/variables';
import { display } from '../../assets/variables';
import {
  updateCover,
  updateProfile,
  getProfileUser,
  getUserPhotos,
  getUsersPosts,
} from '../axios/api';
import { useContext, useEffect } from 'react';
import ProfileBody from './ProfileBody';
import { ContextValue, UserContext } from '../../assets/context/userContext';
const ProfilePage = () => {
  const { userInfo, setUserInfo, setUserPhoto, setQuotes } = useContext(
    UserContext,
  ) as ContextValue;

  const handleProfileInputChange = async () => {
    const formData = new FormData();
    await updateProfile(formData);
    await getProfileData();
  };
  const handleCoverSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file) {
      const formData = new FormData();
      formData.append('CoverImg', file[0] as Blob);
      await updateCover(formData);
      await getProfileData();
    }
  };

  useEffect(() => {
    (async () => {
      await getProfileData();
    })();
  }, []);
  const getProfileData = async () => {
    try {
      const response = await getProfileUser();
      const PhotoResponse = await getUserPhotos();
      const QuotesResponse = await getUsersPosts();

      const mergedData = QuotesResponse.data.map((item: { id: number }) => ({
        ...item,
        photo: PhotoResponse.data.find(
          (item2: { postId: number; photo: string }) => item2.postId === item.id && item2,
        )?.photo,
      }));
      setUserInfo(response.data);
      setUserPhoto(PhotoResponse.data);
      setQuotes(mergedData);
    } catch (error) {
      return error;
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: display.flex,
          justifyContent: justifyContent.center,
          flexDirection: display.flexDirectionColumns,
        }}
      >
        <Box sx={{ width: '100%' }}>
          <CoverImage>
            <CoverImg src={`${process.env.REACT_APP_URL}${userInfo?.coverImage}`} />
          </CoverImage>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ width: '80%', margin: margin.auto }}>
            <Box sx={{ width: '100%', position: position.relative, height: '200px' }}>
              <Box sx={{ position: 'absolute', right: 30, top: '-50px' }}>
                <input hidden accept='image/*' type='file' />
                <Button
                  variant='contained'
                  aria-label='upload picture'
                  component='label'
                  sx={{
                    color: '#21130d',
                    backgroundColor: '#ffffff',
                    '&:hover': { backgroundColor: '#ffffff' },
                    fontFamily: 'sans-serif',
                  }}
                >
                  Add Cover Photo
                  <input
                    hidden
                    accept='image/*'
                    type='file'
                    name='attr'
                    onChange={handleCoverSubmit}
                  />
                </Button>
              </Box>
              <Box sx={{ position: position.absolute, top: '-35px', left: '50px' }}>
                <ProfileImage src={`${process.env.REACT_APP_URL}${userInfo?.profileImage}`} />
                <CameraIcon>
                  <IconButton
                    sx={{ color: '#21130d' }}
                    aria-label='upload picture'
                    component='label'
                  >
                    <input
                      hidden
                      accept='image/*'
                      type='file'
                      name='attr'
                      onChange={handleProfileInputChange}
                    />
                    <CameraAltIcon />
                  </IconButton>
                </CameraIcon>
              </Box>

              <Box>
                <HeaderName variant='h3'>
                  {' '}
                  {userInfo && userInfo.first_name} {userInfo && userInfo.last_name}
                </HeaderName>
              </Box>
            </Box>
            <Box sx={{ margin: margin.auto }}>
              <Divider />
            </Box>
          </Box>
          <Box>
            <ProfileBody />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ProfilePage;
