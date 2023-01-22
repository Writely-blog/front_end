import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { isAuthenticated } from '../../auth';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar-container'>
      <div className='nav-left-side'>
        <p onClick={() => navigate('/')}>WRITELY</p>
      </div>
      <div className='nav-right-side'>
        <p onClick={() => navigate('/')}>ALL POSTS</p>
        <p onClick={() => navigate('/myPosts')}>MY POSTS</p>
        {isAuthenticated() ? (
          <>
            <p onClick={() => navigate('/login')}>LOGOUT</p>
            <BiLogOut size={35} />
          </>
        ) : (
          <>
            <p onClick={() => navigate('/login')}>LOGIN</p>
            <BiLogIn size={35} />
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
