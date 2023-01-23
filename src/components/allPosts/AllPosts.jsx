import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/NavBar';
import './AllPosts.css';
import ScrollablePosts from '../scrollablePosts/ScrollablePosts';
import { fetchAllPosts } from '../../fetchFunctions';

const AllPosts = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMesssage] = useState('');

  const fetchAndSetAllPosts = async () => {
    try {
      const fetchData = await fetchAllPosts();
      if (fetchData?.statusText === 'OK') {
        setErrorMesssage('');
        setData(fetchData.data.posts);
      }
    } catch (error) {
      console.log(error);
      setErrorMesssage(
        error.response.data.msg ? error.response.data.msg : error.response.data
      );
    }
  };

  useEffect(() => {
    fetchAndSetAllPosts();
  }, []);

  return (
    <div className='main-container'>
      <NavBar />
      <div className='error-container'>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <ScrollablePosts data={data} isEditVersion={false} />
    </div>
  );
};

export default AllPosts;
