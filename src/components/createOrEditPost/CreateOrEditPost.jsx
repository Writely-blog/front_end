import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import NavBar from '../navBar/NavBar';
import {
  fetchGetUserName,
  fetchCreatePost,
  fetchOnePost,
  fetchEditPost,
} from '../../fetchFunctions';
import './CreateOrEditPost.css';

const CreateOrEditPost = ({ create }) => {
  const navigate = useNavigate();
  const { id: post_id } = useParams();

  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');
  const [errorMessage, setErrorMesssage] = useState('');
  const [userName, setUserName] = useState('');

  const getUserName = async (id) => {
    await fetchGetUserName(id).then((userName) => setUserName(userName));
  };

  const getPostData = async (id) => {
    await fetchOnePost(id).then((res) => {
      const { title, context } = res?.data?.post[0];
      setTitle(title);
      setContext(context);
    });
  };

  if (!create) {
    useEffect(() => {
      getPostData(post_id);
    }, [post_id]);
  }

  const user_id = 2;

  useEffect(() => {
    getUserName(user_id);
  }, [user_id]);

  const handleCreatePost = async (title, context) => {
    try {
      const res = await fetchCreatePost({ title, context });
      if (res.data.hasOwnProperty('post')) {
        navigate('/myPosts');
      } else {
        setErrorMesssage(
          res.response.data.msg ? res.response.data.msg : res.response.data
        );
      }
    } catch (error) {
      if (error.hasOwnProperty('response')) {
        setErrorMesssage(
          error.response.data.msg
            ? error.response.data.msg
            : error.response.data
        );
      }
      setErrorMesssage(error.message);
    }
  };

  const handleEditPost = async (post_id, title, context) => {
    try {
      const input_data = { title, context };
      const res = await fetchEditPost(post_id, input_data);
      if (res.data.hasOwnProperty('post')) {
        navigate('/myPosts');
      } else {
        setErrorMesssage(
          res.response.data.msg ? res.response.data.msg : res.response.data
        );
      }
    } catch (error) {
      if (error.hasOwnProperty('response')) {
        setErrorMesssage(
          error.response.data.msg
            ? error.response.data.msg
            : error.response.data
        );
      }
      setErrorMesssage(error.message);
    }
  };

  return (
    <div className='main-container'>
      <NavBar />
      <div className='error-container'>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className='onepost-container create-edit-onepost-container'>
        <div className='onepost-left-side'>
          <div className='onepost-left-side-top'></div>
          <div className='onepost-left-side-bottom'></div>
        </div>
        <div className='onepost-right-side'>
          <div className='onepost-title-bar'>
            <div className='onepost-title create-edit-title-input'>
              <input
                className='title-input'
                type='text'
                id='title'
                maxLength={70}
                name='title'
                placeholder='Title'
                onChange={(event) => setTitle(event.target.value)}
                defaultValue={title ? title : null}
                required
              />
            </div>
            <div className='onepost-btns '>
              {create ? (
                <>
                  <div className='onepost-left-btn create-edit-onepost-btns'>
                    <p onClick={() => handleCreatePost(title, context)}>
                      CREATE
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className='onepost-right-btn create-edit-onepost-btns'>
                    <p onClick={() => handleEditPost(post_id, title, context)}>
                      SAVE EDIT
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className='onepost-contex create-edit-context-input'>
            <textarea
              className='context-input'
              type='text'
              maxLength={2000}
              id='context'
              name='context'
              placeholder='Context'
              onChange={(event) => setContext(event.target.value)}
              defaultValue={context ? context : null}
              required
            />
          </div>
          <div className='onepost-footer'>
            <div className='onepost-footer-left'>
              <div className='onepost-username create-edit-user-name'>
                <p>{userName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrEditPost;
