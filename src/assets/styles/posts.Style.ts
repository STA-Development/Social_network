import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export const PostBox = styled(Box)({
  backgroundColor: 'white',
  height: 'auto',
  width: '100%',
  display: 'grid',
  borderRadius: '10px',
  marginTop: '30px',
});
export const HeaderPost = styled(Box)({
  display: 'flex',
  gap: '3px',
  alignItems: 'center',
  paddingTop: '20px',
  paddingLeft: '10px',
});
export const UserInfo = styled(Typography)({
  fontFamily: 'sans-serif',
  padding: '10px',
  fontSize: '15px',
});
export const QuotePost = styled(Typography)({
  fontFamily: 'sans-serif',
  fontSize: '20px',
  paddingLeft: '15px',
  paddingTop: '20px',
});
export const ImagesPost = styled(Box)({
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
});
export const PostsUtilities = styled(Box)({
  paddingTop: '15px',
  display: 'flex',
  justifyContent: 'space-around',
});
export const Like = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});
export const Comment = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});
export const Share = styled(Box)({});
