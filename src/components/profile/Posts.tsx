import Box from '@mui/material/Box';
import { useContext } from 'react';
import { ContextValue, UserContext } from '../../assets/context/userContext';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
const Posts = () => {
  const { quotes, userInfo } = useContext(UserContext) as ContextValue;
  return (
    <Box>
      <Box sx={{ alignItems: 'center' }}>
        <Box>
          <Box>
            {quotes &&
              quotes?.map((item, index) => (
                <Box
                  sx={{
                    backgroundColor: 'white',
                    height: 'auto',
                    width: '100%',
                    display: 'grid',
                    borderRadius: '10px',
                    marginTop: '30px',
                  }}
                  key={index}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '3px',
                      alignItems: 'center',
                      paddingTop: '20px',
                      paddingLeft: '10px',
                    }}
                  >
                    <Avatar src={`${process.env.REACT_APP_URL}${userInfo?.profileImage}`} />
                    <Typography
                      id='modal-modal-title'
                      sx={{ fontFamily: 'sans-serif', padding: '10px', fontSize: '15px' }}
                    >
                      {userInfo && userInfo.first_name} {userInfo && userInfo.last_name}
                    </Typography>
                  </Box>
                  <Box sx={{ paddingTop: '20px' }}></Box>
                  <Typography
                    id='modal-modal-title'
                    sx={{ fontFamily: 'sans-serif', fontSize: '20px', paddingLeft: '15px' }}
                  >
                    {item.quotes}
                  </Typography>
                  <Box sx={{ paddingTop: '20px' }}></Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {item.photo && (
                      <Box key={index}>
                        <img
                          width='500px'
                          height='450px'
                          key={index}
                          alt={item.photo}
                          src={`${process.env.REACT_APP_URL}${item.photo}`}
                        />
                      </Box>
                    )}
                  </Box>
                  <Box sx={{ paddingBottom: '20px' }}></Box>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Posts;
