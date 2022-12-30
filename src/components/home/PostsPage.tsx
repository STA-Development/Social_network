import Navbar from './navbar/Navbar';
import './PostPage.css';
import happy from '../../images/happy.jpg';
import happy2 from '../../images/happy2.jpg';
import happy3 from '../../images/happy3.jpg';
import * as React from 'react';

const PostsPage = () => {
  return (
    <div>
      <Navbar />
      <div className='screen'>
        <h1 className='textDesign'>share your life with others !</h1>
        <div className='imageParent'>
          <div className='backgroundImage'>
            <img className='img-design' src={happy2} alt='happy' />
            <p className='text-design'>
              To forget how to dig the earth and to tend the soil is to forget ourselves.
            </p>
          </div>
          <div className='backgroundImage'>
            <img className='img-design2' src={happy} alt='happy' />
            <p className='text-design2'>
              The moments of happiness we enjoy take us by surprise. It is not that we seize them,
              but that they seize us.
            </p>
          </div>
          <div className='backgroundImage'>
            <img className='img-design3' src={happy3} alt='happy' />
            <p className='text-design3'>
              The good you do today will be forgotten tomorrow. Do good anyway.
            </p>
          </div>
        </div>
        <div className='AddButton'></div>
      </div>
    </div>
  );
};
export default PostsPage;
