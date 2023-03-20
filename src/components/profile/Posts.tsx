import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import { ContextValue, UserContext } from '../../assets/context/userContext';
import * as React from 'react';
import Typography from '@mui/material/Typography';
//import { PhotoProvider, PhotoView } from 'react-photo-view';
import Avatar from '@mui/material/Avatar';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MenuEdit from './modal/MenuEdit';
import { Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfiniteScroll from 'react-infinite-scroll-component';
import { deleteImage, getUsersPosts, updatePost } from '../axios/api';
import Button from '@mui/material/Button';
import { TextPost } from '../../assets/styles/ProfileBody.style';
import DeleteIcon from '@mui/icons-material/Delete';
import { onePhoto } from '../../assets/model/model';
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
} from '../../assets/styles/posts.Style';
const Posts = () => {
  const { quotes, userInfo, setQuotes, isEdit, quoteId, setIsEdit, setPhotos, photos } = useContext(
    UserContext,
  ) as ContextValue;
  const [take, setTake] = useState<number>(0);
  const changeNext = async () => {
    const response = await getUsersPosts(take + 5);
    setQuotes(response.data);
    setTake(5 + take);
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

  return (
    <Box>
      <InfiniteScroll
        dataLength={quotes?.length ? quotes.length : 0}
        next={() => changeNext()}
        hasMore={true}
        loader={<h4></h4>}
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
                                <TextPost
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
                            {item.photos.map((item2, index) => (
                              <Box key={index}>
                                {item.photos.length === 1 ? (
                                  <img
                                    width='500px'
                                    height='500px'
                                    alt={item2.photo}
                                    src={`${process.env.REACT_APP_URL}${item2.photo}`}
                                  />
                                ) : (
                                  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {quoteId === item.id && isEdit ? (
                                      <Box sx={{ display: 'flex' }}>
                                        <DeleteIcon
                                          color='error'
                                          onClick={() => handleDelete(item2.id)}
                                        />
                                        <img
                                          width='130px'
                                          height='130px'
                                          alt={item2.photo}
                                          src={`${process.env.REACT_APP_URL}${item2.photo}`}
                                        />
                                      </Box>
                                    ) : (
                                      <img
                                        width='150px'
                                        height='150px'
                                        alt={item2.photo}
                                        src={`${process.env.REACT_APP_URL}${item2.photo}`}
                                      />
                                    )}
                                  </Box>
                                )}
                              </Box>
                            ))}
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
                            <FavoriteBorderIcon sx={{ color: 'red', cursor: 'pointer' }} />
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
