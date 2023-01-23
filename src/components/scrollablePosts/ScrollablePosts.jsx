import React from 'react';
import './ScrollablePosts.css';
import OnePost from '../onePost/OnePost';

const ScrollablePosts = ({ data, isEditVersion }) => {
  return (
    <div
      className={
        isEditVersion
          ? 'scrollable-container editVersion'
          : 'scrollable-container'
      }
    >
      <div id='scrollable' className='posts-container'>
        {data?.map((post) => {
          return (
            <OnePost
              key={post.id}
              post_id={post.id}
              title={post.title}
              context={post.context}
              likes_count={post.likes_count}
              user_id={post.user_id}
              isEditVersion={isEditVersion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollablePosts;
