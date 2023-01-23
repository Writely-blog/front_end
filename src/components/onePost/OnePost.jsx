import React, { useEffect, useState } from 'react';
import './OnePost.css';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { fetchGetUserName } from '../../fetchFunctions';

const OnePost = ({ title, context, likes_count, user_id, isEditVersion }) => {
  const [userName, setUserName] = useState('');

  const getUserName = async (id) => {
    await fetchGetUserName(id).then((userName) => setUserName(userName));
  };

  useEffect(() => {
    getUserName(user_id);
  }, [user_id]);

  return (
    <div className='onepost-container'>
      <div className='onepost-left-side'>
        <div className='onepost-left-side-top'></div>
        <div className='onepost-left-side-bottom'></div>
      </div>
      <div className='onepost-right-side'>
        <div className='onepost-title-bar'>
          <div className='onepost-title'>
            <p>{title}</p>
          </div>
          <div className='onepost-btns'>
            {isEditVersion ? (
              <>
                <div className='onepost-left-btn'>
                  <FiEdit />
                </div>
                <div className='onepost-right-btn'>
                  <MdDeleteForever />
                </div>
              </>
            ) : (
              <>
                <div className='onepost-right-btn'>
                  <FcLike color='white' size='40px' />
                </div>
              </>
            )}
          </div>
        </div>
        <div className='onepost-contex'>
          <p>{context}</p>
        </div>
        <div className='onepost-footer'>
          <div className='onepost-footer-left'>
            <div className='onepost-username'>
              <p>{userName}</p>
            </div>
            <div className='onepost-like-counter'>
              <p>{likes_count} likes</p>
            </div>
          </div>
          <div className='onepost-footer-right-date'>
            <p>12/12/12 12:12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePost;
