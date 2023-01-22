import React from 'react';
import './ScrollablePosts.css';
import OnePost from '../onePost/OnePost';

const ScrollablePosts = () => {
  const data = [
    {
      title: 'some 1',
      context:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio, consectetur numquam iste repellat sequi rem tempore assumenda rerum quam nisi praesentium atque eligendi asperiores, eveniet voluptates ad repellendus ullam? Asperiores unde ab culpa beatae ex optio dolorem totam odio',
      likes_count: 0,
      user_id: 2,
    },
    {
      title: 'some 2',
      context:
        'Lorem ipsum dolor sit amet conseLorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio, consectetur numquam iste repellat sequi rem tempore cteturLorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio, consectetur numquam iste repellat sequi rem tempore ',
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
        {data?.map((post) => {
          return (
            <OnePost
              title={post.title}
              context={post.context}
              likes_count={post.likes_count}
              user_id={post.user_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollablePosts;
