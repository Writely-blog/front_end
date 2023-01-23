import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { isAuthenticated, endSession } from '../../auth';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar-container'>
      <div className='nav-left-side'>
        <p onClick={() => navigate('/')} className='btn-animated'>
          WRITELY
        </p>
      </div>
      <div className='nav-right-side'>
        <p className='btn-animated' onClick={() => navigate('/')}>
          ALL POSTS
        </p>
        <p className='btn-animated' onClick={() => navigate('/myPosts')}>
          MY POSTS
        </p>
        {isAuthenticated() ? (
          <div
            className='btn-login-logout btn-animated'
            onClick={() => {
              endSession();
              navigate('/login');
            }}
          >
            LOGOUT
            <BiLogOut size={35} />
          </div>
        ) : (
          <div
            className='btn-login-logout btn-animated'
            onClick={() => navigate('/login')}
          >
            LOGIN
            <BiLogIn size={35} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
