import React from 'react';
import NavBar from '../navBar/NavBar';
import './AllPosts.css';
import ScrollablePosts from '../scrollablePosts/ScrollablePosts';

const AllPosts = () => {
  return (
    <div className='main-container'>
      <NavBar />
      <ScrollablePosts />
    </div>
  );
};

export default AllPosts;
