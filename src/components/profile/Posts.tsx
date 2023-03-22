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
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfiniteScroll from 'react-infinite-scroll-component';
import { deleteImage, deletePost, getUsersPosts, updatePost } from '../axios/api';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { onePhoto, quotesType } from '../../assets/model/model';
import {
  PostBox,
  HeaderPost,
  UserInfo,
  QuotePost,
  ImagesPost,
  PostsUtilities,
  Like,
  Comment,
  Share,
  EditTextPost,
} from '../../assets/styles/posts.Style';
const Posts = () => {
  const { quotes, userInfo, setQuotes, isEdit, quoteId, setIsEdit, setPhotos, photos } = useContext(
    UserContext,
  ) as ContextValue;
  const [take, setTake] = useState<number>(0);
  const changeNext = async () => {
    const page = 5;
    const response = await getUsersPosts(take + page);
    setQuotes(response.data);
    setTake(page + take);
  };

  const handleChangeQuotes = (value: string) => {
    const updateDataQuotes = quotes?.map((item) =>
      item.id === quoteId ? { ...item, quotes: value } : item,
    );
    setQuotes(updateDataQuotes);
  };
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const item = quotes?.filter((item) => item.id === quoteId && { ...item })[0];
    if (item) {
      await updatePost(quoteId, item.quotes);
    }
    setIsEdit(false);
  };
  const handleDelete = async (id: number) => {
    setPhotos(photos?.filter((photo: onePhoto) => photo.id !== id));
    await deleteImage(id);
    const response = await getUsersPosts();
    setQuotes(response.data);
  };
  const handleOnePost = async (id: number) => {
    await deletePost(id);
    setQuotes(quotes?.filter((quote: quotesType) => quote.id !== id));
    setPhotos(photos?.filter((photo: onePhoto) => photo.postId !== id));
  };

  return (
    <Box>
      <InfiniteScroll
        dataLength={quotes?.length ?? 0}
        next={() => changeNext()}
        hasMore={true}
        loader={<Typography variant='h6'>...</Typography>}
      >
        <Box sx={{ alignItems: 'center' }}>
          <Box>
            <Box>
              {quotes &&
                quotes?.map((item, index) => {
                  return (
                    <Box key={index}>
                      <PostBox>
                        <HeaderPost>
                          <Avatar src={`${process.env.REACT_APP_URL}${userInfo?.profileImage}`} />
                          <UserInfo id='modal-modal-title'>
                            {userInfo && userInfo.first_name} {userInfo && userInfo.last_name}
                          </UserInfo>
                          <Box sx={{ paddingLeft: '250px' }}>
                            <MenuEdit id={item.id} />
                          </Box>
                        </HeaderPost>
                        <Box>
                          <Typography sx={{ fontSize: '13px', paddingLeft: '60px' }}>
                            {item.date}
                          </Typography>
                        </Box>
                        <Box>
                          <QuotePost id='modal-modal-title'>
                            {quoteId === item.id && isEdit ? (
                              <Box sx={{ display: 'flex', gap: '10px' }}>
                                <EditTextPost
                                  value={item.quotes}
                                  onChange={(e) => handleChangeQuotes(e.target.value)}
                                />
                                <Button variant='contained' onClick={(e) => handleEditSubmit(e)}>
                                  Ok
                                </Button>
                              </Box>
                            ) : (
                              item.quotes
                            )}
                          </QuotePost>
                        </Box>
                        <Box sx={{ paddingTop: '10px' }}></Box>
                        <Box className='foo' sx={{ display: 'flex', justifyContent: 'center' }}>
                          <ImagesPost>
                            <PhotoProvider>
                              {item.photos.map((item2, index) => (
                                <Box key={index}>
                                  {item.photos.length === 1 ? (
                                    <Box>
                                      {quoteId === item.id && isEdit ? (
                                        <Box>
                                          <DeleteIcon
                                            sx={{
                                              '&:hover': {
                                                color: 'pink',
                                                cursor: 'pointer',
                                              },
                                            }}
                                            color='error'
                                            onClick={() => handleOnePost(item2.postId)}
                                          />
                                          <img
                                            width='500px'
                                            height='500px'
                                            alt={item2.photo}
                                            src={`${process.env.REACT_APP_URL}${item2.photo}`}
                                          />
                                        </Box>
                                      ) : (
                                        <PhotoView
                                          src={`${process.env.REACT_APP_URL}${item2.photo}`}
                                        >
                                          <img
                                            width='500px'
                                            height='500px'
                                            alt={item2.photo}
                                            src={`${process.env.REACT_APP_URL}${item2.photo}`}
                                          />
                                        </PhotoView>
                                      )}
                                    </Box>
                                  ) : (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                      {quoteId === item.id && isEdit ? (
                                        <Box>
                                          <Box
                                            sx={{
                                              backgroundColor: '#c6c6c6',
                                              borderRadius: '50px',
                                              width: '30px',
                                              height: '30px',
                                              position: 'absolute',
                                              paddingLeft: '4px',
                                              paddingTop: '3px',
                                            }}
                                          >
                                            <DeleteIcon
                                              sx={{
                                                '&:hover': {
                                                  color: 'pink',
                                                  cursor: 'pointer',
                                                },
                                              }}
                                              color='error'
                                              onClick={() => handleDelete(item2.id)}
                                            />
                                          </Box>
                                          <img
                                            width='150px'
                                            height='160px'
                                            alt={item2.photo}
                                            src={`${process.env.REACT_APP_URL}${item2.photo}`}
                                          />
                                        </Box>
                                      ) : (
                                        <PhotoView
                                          src={`${process.env.REACT_APP_URL}${item2.photo}`}
                                        >
                                          <img
                                            width='160px'
                                            height='170px'
                                            alt={item2.photo}
                                            src={`${process.env.REACT_APP_URL}${item2.photo}`}
                                          />
                                        </PhotoView>
                                      )}
                                    </Box>
                                  )}
                                </Box>
                              ))}
                            </PhotoProvider>
                          </ImagesPost>
                        </Box>
                        <Box sx={{ paddingTop: '30px' }}></Box>
                      </PostBox>
                      <Divider sx={{ paddingBottom: '10px' }} />
                      <PostsUtilities>
                        <Like
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
                            <FavoriteIcon sx={{ color: 'red', cursor: 'pointer' }} />
                          ) : (
                            <FavoriteBorderIcon sx={{ cursor: 'pointer' }} />
                          )}
                          Like
                        </Like>
                        <Comment>
                          <ChatBubbleOutlineIcon /> comment
                        </Comment>
                        <Share>
                          <ShareIcon /> share
                        </Share>
                      </PostsUtilities>
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
