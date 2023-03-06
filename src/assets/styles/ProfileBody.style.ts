import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
export const BodyDiv = styled(Box)({
  display: 'grid',
  gridGap: '5px',
  justifyContent: 'center',
  gridTemplateColumns: '4fr 4fr ',
  padding: '20px 200px',
  gap: '30px',
  backgroundColor: '#f0f2f5',
  alignItems: 'start',
});
export const UploadDiv = styled(Box)({
  backgroundColor: 'white',
  height: 'auto',
  width: '100%',
  display: 'grid',
  paddingLeft: '10px',
  borderRadius: '10px',
});
export const TextPost = styled(Input)({
  borderRadius: '50px',
  height: '35px',
  width: '75%',
  backgroundColor: '#f0f2f5',
  border: 'none',
});
export const PrevPhotosDiv = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',
  flexWrap: 'wrap',
  alignItem: 'center',
  alignContent: 'center',
  justifyContent: 'center',
});
export const UploadImage = styled(Button)({
  position: 'absolute',
  bottom: '80%',
  right: '75%',
});
export const PhotoDiv = styled(Box)({
  backgroundColor: 'white',
  height: 'auto',
  width: '100%',
  display: 'grid',
  paddingLeft: '10px',
  borderRadius: '10px',
});
export const PhotosDisplay = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',
  overflow: 'auto',
  position: 'relative',
  flexWrap: 'wrap',
  justifyContent: 'center',
  height: 'auto',
});
