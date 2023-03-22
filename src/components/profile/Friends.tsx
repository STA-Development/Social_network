import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
const Friends = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        height: 'auto',
        width: '100%',
        display: 'grid',
        paddingLeft: '10px',
        borderRadius: '10px',
      }}
    >
      <Box sx={{ padding: '20px 10px' }}>
        <Typography variant='h5' component='h2' sx={{ fontFamily: 'sans-serif' }}>
          Friends
        </Typography>
      </Box>
    </Box>
  );
};
export default Friends;
