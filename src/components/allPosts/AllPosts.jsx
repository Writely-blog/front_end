import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/NavBar';
import './AllPosts.css';
import ScrollablePosts from '../scrollablePosts/ScrollablePosts';
import { fetchAllPosts } from '../../fetchFunctions';

const AllPosts = () => {
  const [data, setData] = useState([]);

  const fetchAndSetAllPosts = async () => {
    try {
      const fetchData = await fetchAllPosts();
      if (fetchData?.statusText === 'OK') {
        setData(fetchData.data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAndSetAllPosts();
  }, []);

  return (
    <div className='main-container'>
      <NavBar />
      <ScrollablePosts data={data} isEditVersion={false} />
    </div>
  );
};

export default AllPosts;
