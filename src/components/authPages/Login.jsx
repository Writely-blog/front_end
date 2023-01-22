import React from 'react';
import './Login-Register.css';
import { fetchLogin } from '../../fetchFunctions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const data = {
    email: 'test1@gmail.com',
    password: 'password123',
  };

  return (
    <div className='container'>
      <div className='title'>
        <p>WRITELY</p>
      </div>
      <div className='form-conteiner'>
        <div className='form-title'>
          <p>LOGIN</p>
        </div>
        <div className='form-body'>
          <form className='form-container'>
            <div className='form-inputs'>
              <div>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  required
                />
              </div>
              <div>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  required
                />
              </div>
            </div>
            <div className='form-btn'>
              <input type='submit' value='Login' />
            </div>
          </form>
        </div>
        <div className='form-footer'>
          <p>Not a member?</p>
          <a onClick={() => navigate('/register')} className='signup-link'>
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
