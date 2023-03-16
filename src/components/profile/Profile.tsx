import * as React from 'react';
import Box from '@mui/material/Box';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { CircularProgress, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Alert from '@mui/material/Alert';
import { getLimitedPhotos } from '../axios/api';
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
import { useContext, useEffect, useState } from 'react';
import ProfileBody from './ProfileBody';
import { ContextValue, UserContext } from '../../assets/context/userContext';
import SuccessModal from './modal/SuccessModal';
const ProfilePage = () => {
  const {
    userInfo,
    setUserInfo,
    setUserPhoto,
    setQuotes,
    loading,
    setLoading,
    setPhotos,
    setOpen,
  } = useContext(UserContext) as ContextValue;
  const [profileError, setProfileError] = useState<boolean>(false);
  const [coverError, setCoverError] = useState<boolean>(false);

  const handleProfileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileError(false);
    setLoading(true);
    try {
      const file = e.target.files;
      if (file?.length) {
        const formData = new FormData();
        formData.append('ProfileImg', file[0] as Blob);
        await updateProfile(formData);
        await getProfileData();
        setOpen(true);
      }
    } catch {
      setProfileError(true);
      setOpen(false);
    }
    setLoading(false);
  };
  const handleCoverSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoverError(false);
    setLoading(true);
    try {
      const file = e.target.files;
      if (file?.length) {
        const formData = new FormData();
        formData.append('CoverImg', file[0] as Blob);
        await updateCover(formData);
        await getProfileData();
        setOpen(true);
      }
    } catch {
      setCoverError(true);
    }
    setLoading(false);
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
      const LimitedgetResponse = await getLimitedPhotos();
      setPhotos(LimitedgetResponse.data);

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
      {coverError && (
        <Alert onClose={() => setCoverError(false)} variant='filled' severity='error'>
          Oops, Cover image has been failed, Please try again or choose another
        </Alert>
      )}
      <Box
        sx={{
          display: display.flex,
          justifyContent: justifyContent.center,
          flexDirection: display.flexDirectionColumns,
        }}
      >
        <Box>
          <CoverImage>
            <PhotoProvider>
              <PhotoView src={`${process.env.REACT_APP_URL}${userInfo?.coverImage}`}>
                <CoverImg src={`${process.env.REACT_APP_URL}${userInfo?.coverImage}`} />
              </PhotoView>
            </PhotoProvider>
          </CoverImage>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ width: '80%', margin: margin.auto }}>
            <Box sx={{ width: '100%', position: position.relative, height: '200px' }}>
              <Box sx={{ position: 'absolute', right: 220, top: '-50px' }}>
                <input hidden accept='image/*' type='file' />
                {loading ? (
                  <CircularProgress />
                ) : (
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
                )}
              </Box>
              <Box sx={{ position: position.absolute, top: '-35px', left: '280px' }}>
                <PhotoProvider>
                  <PhotoView src={`${process.env.REACT_APP_URL}${userInfo?.profileImage}`}>
                    <ProfileImage src={`${process.env.REACT_APP_URL}${userInfo?.profileImage}`} />
                  </PhotoView>
                </PhotoProvider>
                <CameraIcon>
                  {loading ? (
                    <CircularProgress />
                  ) : (
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
                  )}
                </CameraIcon>
              </Box>

              <Box>
                {profileError && (
                  <Alert onClose={() => setProfileError(false)} variant='filled' severity='error'>
                    Oops, profile creation has been failed, Please try again or choose another
                  </Alert>
                )}
                <HeaderName variant='h3'>
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
      <SuccessModal />
    </Box>
  );
};
export default ProfilePage;
