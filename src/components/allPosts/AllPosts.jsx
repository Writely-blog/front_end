import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/NavBar';
import './AllPosts.css';
import ScrollablePosts from '../scrollablePosts/ScrollablePosts';
import { fetchAllPosts } from '../../fetchFunctions';
import Loading from '../loading/Loading';

const AllPosts = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMesssage] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchAndSetAllPosts = async () => {
    try {
      const fetchData = await fetchAllPosts();
      setLoading(false);
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
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetAllPosts();
  }, []);

  console.log(data.length !== 0 ? 1 : 2);

  return (
    <div className='main-container'>
      <NavBar />
      <div className='error-container'>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      {loading ? (
        <Loading />
      ) : (
        <ScrollablePosts data={data} isEditVersion={false} />
      )}
    </div>
  );
};

export default AllPosts;
