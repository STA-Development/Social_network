import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { CircularProgress, Divider } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import {
  PrevPhotosDiv,
  TextPost,
  UploadDiv,
  UploadImage,
} from '../../assets/styles/ProfileBody.style';
import { UserContext } from '../../assets/context/userContext';
import { ContextValue } from '../../assets/context/userContext';
import { useContext, useState } from 'react';
import { creatPhotos, getLimitedPhotos, getUserPhotos, getUsersPosts } from '../axios/api';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const Quotes = () => {
  const {
    setPhotos,
    userInfo,
    selectedImage,
    setSelectedImage,
    setUserPhoto,
    setQuotes,
    loading,
    setLoading,
    open,
    setOpen,
  } = useContext(UserContext) as ContextValue;

  const [postValue, setPostValue] = useState<string>('');
  const [postError, setPostError] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const handleSendPhoto = async () => {
    setPostError(false);
    setLoading(true);
    try {
      if (postValue || selectedImage) {
        const formData = new FormData();

        if (selectedImage) {
          const image = selectedImage.length;
          for (let i = 0; i < image; i++) {
            if (selectedImage) {
              formData.append('userPhoto', selectedImage[i]);
            }
          }
        }
        formData.append('quotes', postValue);
        await creatPhotos(formData);
        await getPhotos();
        setSelectedImage(undefined);
        setPostValue('');
        const LimitedgetResponse = await getLimitedPhotos();
        setPhotos(LimitedgetResponse.data);
        setOpen(true);
      }
    } catch (e) {
      console.log(e, 'e');
      setPostError(true);
      setOpen(false);
    }
    setLoading(false);
  };

  const getPhotos = async () => {
    setLoading(true);
    try {
      const Photo = await getUserPhotos();
      const QuotesResponse = await getUsersPosts();
      const mergedData = QuotesResponse.data.map((item: { id: number }) => ({
        ...item,
        photo: Photo.data.find(
          (item2: { postId: number; photo: string }) => item2.postId === item.id && item2,
        )?.photo,
      }));
      setUserPhoto(Photo.data);
      setQuotes(mergedData);
    } catch (error) {
      return error;
    }
    setLoading(false);
  };

  const handlePreview = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileList = new DataTransfer();
      const arraysFiles = Array.from(files).map((item) => item);
      arraysFiles.map((item) => {
        fileList.items.add(item);
      });
      if (selectedImage && selectedImage) {
        const arrays = Array.from(selectedImage).map((item) => item);
        arrays.map((item) => {
          fileList.items.add(item);
        });
      }

      setSelectedImage(fileList.files);
    }
  };

  const handleClickDeletePicture = (indexProp: number) => {
    if (selectedImage && selectedImage) {
      const removedId = Array.from(selectedImage).filter((_, index) => index !== indexProp);
      const fileList = new DataTransfer();
      removedId.map((item) => {
        fileList.items.add(item);
      });
      setSelectedImage(fileList.files);
    }
  };

  return (
    <UploadDiv>
      <Box sx={{ padding: '20px 10px' }}>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Avatar src={`${process.env.REACT_APP_URL}${userInfo?.profileImage}`} />
          <TextPost value={postValue} onChange={(e) => setPostValue(e.target.value)} />
          {loading ? (
            <CircularProgress />
          ) : (
            <Button
              sx={{ height: '40px', width: '80px' }}
              onClick={handleSendPhoto}
              variant='contained'
              component='label'
            >
              post
            </Button>
          )}
        </Box>
        <Box>
          <Divider sx={{ paddingTop: '20px' }} />
          <Box>
            <Button
              variant='contained'
              aria-label='upload picture'
              component='label'
              sx={{ width: '100%' }}
            >
              <input
                hidden
                accept='image/*'
                multiple
                type='file'
                name='attr'
                onChange={handlePreview}
              />
              upload images
            </Button>
          </Box>
        </Box>
        <Box sx={{ paddingTop: '20px' }}></Box>

        {postError && (
          <Alert onClose={() => setPostError(false)} variant='filled' severity='error'>
            Oops, Something went wrong, Please try again or choose another
          </Alert>
        )}
        <Box>
          <PrevPhotosDiv>
            {selectedImage &&
              selectedImage &&
              [...Array(selectedImage.length)].map(
                (_, index) =>
                  selectedImage &&
                  selectedImage[index] && (
                    <Box sx={{ position: 'relative' }}>
                      <img
                        style={{ borderRadius: '20px' }}
                        width='200px'
                        height='200px'
                        src={URL.createObjectURL(selectedImage[index])}
                      />

                      <UploadImage key={index} onClick={() => handleClickDeletePicture(index)}>
                        <Box
                          sx={{
                            width: '30px',
                            height: '30px',
                            backgroundColor: 'black',
                            borderRadius: '50px',
                            '&:hover': { backgroundColor: 'gray' },
                          }}
                        >
                          <DeleteIcon sx={{ width: '100%' }} color='error' />
                        </Box>
                      </UploadImage>
                    </Box>
                  ),
              )}
          </PrevPhotosDiv>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            backgroundColor: '#8AFF8A',
          }}
        >
          <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ color: 'green' }}>
            Success Message
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Your changes have been successfully changed !
          </Typography>
        </Box>
      </Modal>
    </UploadDiv>
  );
};
export default Quotes;
