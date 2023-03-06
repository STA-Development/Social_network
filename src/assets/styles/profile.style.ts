import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { borders, colors, display, margin } from '../variables';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const CoverImage = styled(Box)({
  width: '80%',
  height: 500,
  backgroundColor: colors.lightGray,
  borderRadius: borders.coverRadius,
  display: display.grid,
  gridTemplateColumns: '20px 20px 20px',
  margin: margin.auto,
  position: 'relative',
});
export const ProfileImage = styled(Avatar)({
  width: 180,
  height: 180,
  borderRadius: borders.circleRadius,
});
export const CameraIcon = styled(Avatar)({
  width: 40,
  height: 40,
  borderRadius: borders.circleRadius,
  marginLeft: margin.cameraLeft,
  backgroundColor: colors.lightGray,
  position: 'absolute',
  bottom: 20,
  right: 3,
});
export const AddPost = styled(Box)({
  position: 'absolute',
  bottom: 50,
  right: 30,
  margin: margin.auto,
  fontFamily: 'sans-serif',
});
export const HeaderName = styled(Typography)({
  position: 'absolute',
  left: '260px',
  top: '20px',
  fontFamily: 'sans-serif',
});
export const CoverImg = styled('img')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  objectFit: 'cover',
});
