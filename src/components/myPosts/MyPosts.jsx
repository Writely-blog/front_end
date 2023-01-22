import React from 'react';
import NavBar from '../navBar/NavBar';
import OnePost from '../onePost/OnePost';
import './MyPosts.css';
import { GrAdd } from 'react-icons/gr';

const MyPosts = () => {
  return (
    <div className='main-container'>
      <NavBar />
      <div className='my-posts-add-btn'>
        <div className='my-posts-name'>
          <p>MY POSTS</p>
        </div>
        <div className='my-posts-btn'>
          <GrAdd size={40} />
        </div>
      </div>
      <OnePost />
    </div>
  );
};

export default MyPosts;
