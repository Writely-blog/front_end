import React from 'react';
import './ScrollablePosts.css';

const ScrollablePosts = () => {
  const data = [
    {
      title: 'some 1',
      context: 'Lorem ipsum dolor sit amet consectetur',
      likes_count: 0,
      user_id: 2,
    },
    {
      title: 'some 2',
      context: 'Lorem ipsum dolor sit amet consectetur',
      likes_count: 0,
      user_id: 2,
    },
    {
      title: 'some 3',
      context: 'Lorem ipsum dolor sit amet consectetur',
      likes_count: 0,
      user_id: 2,
    },
    {
      title: 'some 4',
      context: 'Lorem ipsum dolor sit amet consectetur',
      likes_count: 0,
      user_id: 2,
    },
    {
      title: 'some 5',
      context: 'Lorem ipsum dolor sit amet consectetur',
      likes_count: 0,
      user_id: 2,
    },
  ];
  return (
    <div className='scrollable-container'>
      <div id='scrollable' className='posts-container'>
        {data?.map((el) => (
          <p>{el.title}</p>
        ))}
        <p>--</p>
        {data?.map((el) => (
          <p>{el.title}</p>
        ))}
        <p>--</p>
        {data?.map((el) => (
          <p>{el.title}</p>
        ))}
        <p>--</p>
        {data?.map((el) => (
          <p>{el.title}</p>
        ))}
        <p>--</p>
        {data?.map((el) => (
          <p>{el.title}</p>
        ))}
        <p>--</p>
        {data?.map((el) => (
          <p>{el.title}</p>
        ))}
        <p>--</p>
        {data?.map((el) => (
          <p>{el.title}</p>
        ))}
        <p>--</p>
        {data?.map((el) => (
          <p>{el.title}</p>
        ))}
        <p>--</p>
        {data?.map((el) => (
          <p>{el.title}</p>
        ))}
      </div>
    </div>
  );
};

export default ScrollablePosts;
