import React from 'react';
import './Login-Register.css';
import { fetchLogin } from '../../fetchFunctions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
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
          <p>SIGNUP</p>
        </div>
        <div className='form-body'>
          <form className='form-container'>
            <div className='form-inputs'>
              <div>
                <input
                  type='username'
                  id='username'
                  name='username'
                  placeholder='Username'
                  required
                />
              </div>
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
              <div>
                <input
                  type='password'
                  id='password2'
                  name='password2'
                  placeholder='Repiat Password'
                  required
                />
              </div>
            </div>
            <div className='form-btn'>
              <input type='submit' value='Signup' />
            </div>
          </form>
        </div>
        <div className='form-footer'>
          <p>Already registered?</p>
          <a onClick={() => navigate('/login')} className='signup-link'>
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
