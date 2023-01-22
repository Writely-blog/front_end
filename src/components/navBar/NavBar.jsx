import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='nav-left-side'>
        <p>WRITELY</p>
      </div>
      <div className='nav-right-side'>
        <p>ALL POSTS</p>
        <p>MY POSTS</p>
        <p>LOGIN</p>
      </div>
    </div>
  );
};

export default NavBar;
