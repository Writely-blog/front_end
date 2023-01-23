import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import OnePost from '../onePost/OnePost';
import './MyPosts.css';
import { GrAdd } from 'react-icons/gr';
import ScrollablePosts from '../scrollablePosts/ScrollablePosts';
import { fetchMyPosts } from '../../fetchFunctions';

const MyPosts = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMesssage] = useState('');

  const fetchAndSetMyPosts = async () => {
    try {
      const fetchData = await fetchMyPosts();
      if (fetchData?.statusText === 'OK') {
        setErrorMesssage('');
        setData(fetchData.data.posts);
      }
    } catch (error) {
      if (error.hasOwnProperty('response')) {
        setErrorMesssage(
          error.response.data.msg
            ? error.response.data.msg
            : error.response.data
        );
      }
      setErrorMesssage(error.message);
    }
  };

  useEffect(() => {
    fetchAndSetMyPosts();
  }, []);

  return (
    <div className='main-container'>
      <NavBar />
      <div className='error-container'>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className='my-posts-add-btn'>
        <div className='my-posts-name'>
          <p>MY POSTS</p>
        </div>
        <div className='my-posts-btn'>
          <GrAdd size={40} />
        </div>
      </div>
      <ScrollablePosts data={data} isEditVersion={true} />
    </div>
  );
};

export default MyPosts;
