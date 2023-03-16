import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import { ContextValue, UserContext } from '../../assets/context/userContext';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Avatar from '@mui/material/Avatar';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MenuEdit from './modal/MenuEdit';
import { Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getUsersPosts } from '../axios/api';
const Posts = () => {
  const { quotes, userInfo, setQuotes } = useContext(UserContext) as ContextValue;
  const [take, setTake] = useState<number>(0);

  const changeNext = async () => {
    const response = await getUsersPosts(take + 5);
    setQuotes(response.data);
    setTake(5 + take);
  };

  return (
    <Box>
      <InfiniteScroll
        dataLength={quotes?.length ? quotes.length : 0}
        next={() => changeNext()}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Box sx={{ alignItems: 'center' }}>
          <Box>
            <Box>
              {quotes &&
                quotes?.map((item, index) => {
                  return (
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
                        <Box sx={{ paddingLeft: '250px' }}>
                          <MenuEdit id={item.id} />
                        </Box>
                      </Box>
                      <Typography sx={{ padding: '10px' }}>{item.created_at}</Typography>
                      <Typography
                        id='modal-modal-title'
                        sx={{ fontFamily: 'sans-serif', fontSize: '20px', paddingLeft: '15px' }}
                      >
                        {item.quotes}
                      </Typography>
                      <Box sx={{ paddingTop: '10px' }}></Box>
                      <PhotoProvider>
                        <Box className='foo' sx={{ display: 'flex', justifyContent: 'center' }}>
                          <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {item.photos.map((item2, index) => (
                              <PhotoView
                                key={index}
                                src={`${process.env.REACT_APP_URL}${item2.photo}`}
                              >
                                {item.photos.length === 1 ? (
                                  <img
                                    width='500px'
                                    height='500px'
                                    alt={item2.photo}
                                    src={`${process.env.REACT_APP_URL}${item2.photo}`}
                                  />
                                ) : (
                                  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <img
                                      width='150px'
                                      height='150px'
                                      alt={item2.photo}
                                      src={`${process.env.REACT_APP_URL}${item2.photo}`}
                                    />
                                  </Box>
                                )}
                              </PhotoView>
                            ))}
                          </Box>
                        </Box>
                      </PhotoProvider>

                      <Divider sx={{ paddingBottom: '10px' }} />
                      <Box
                        sx={{ paddingTop: '15px', display: 'flex', justifyContent: 'space-around' }}
                      >
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                          onClick={() =>
                            setQuotes([
                              ...quotes.map((item2) =>
                                item2.id === item.id ? { ...item2, liked: !item2.liked } : item2,
                              ),
                            ])
                          }
                        >
                          {item.liked ? (
                            <FavoriteBorderIcon sx={{ color: 'red', cursor: 'pointer' }} />
                          ) : (
                            <FavoriteBorderIcon sx={{ cursor: 'pointer' }} />
                          )}
                          Like
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                          }}
                        >
                          <ChatBubbleOutlineIcon /> comment
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <ShareIcon /> share
                        </Box>
                      </Box>
                      <Divider sx={{ paddingBottom: '15px' }} />
                      <Box sx={{ paddingBottom: '20px' }}></Box>
                    </Box>
                  );
                })}
            </Box>
          </Box>
        </Box>
      </InfiniteScroll>
    </Box>
  );
};
export default Posts;
