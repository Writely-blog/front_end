import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import OnePost from '../onePost/OnePost';
import './MyPosts.css';
import { RiAddLine } from 'react-icons/ri';
import { MdAddBox } from 'react-icons/md';
import ScrollablePosts from '../scrollablePosts/ScrollablePosts';
import { fetchMyPosts } from '../../fetchFunctions';
import { useNavigate } from 'react-router-dom';
import Loading from '../loading/Loading';

const MyPosts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMesssage] = useState('');

  const fetchAndSetMyPosts = async () => {
    try {
      const fetchData = await fetchMyPosts();
      if (fetchData?.data?.posts) {
        setErrorMesssage('');
        setData(fetchData.data.posts);
      }
    } catch (error) {
      if (error.hasOwnProperty('response')) {
        return setErrorMesssage(
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
        <div className='my-posts-btn '>
          <div className='btn-animated'>
            <RiAddLine size={45} onClick={() => navigate('/createPost')} />
          </div>
        </div>
      </div>
      {data.length !== 0 ? (
        <ScrollablePosts data={data} isEditVersion={true} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MyPosts;
