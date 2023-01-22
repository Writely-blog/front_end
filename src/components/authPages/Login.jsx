import React, { useState } from 'react';
import './Login-Register.css';
import { fetchLogin } from '../../fetchFunctions';
import { useNavigate } from 'react-router-dom';
import { setSession } from '../../auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMesssage] = useState('');

  const handleLogin = async (email, password) => {
    try {
      const res = await fetchLogin({ email, password });
      if (res.data.hasOwnProperty('email', 'token')) {
        setSession(res.data.token);
        navigate('/myPosts');
      } else {
        setErrorMesssage(res.response.data.msg);
      }
    } catch (err) {
      setErrorMesssage(err.response.data.msg);
    }
  };

  return (
    <div className='container'>
      <div className='title'>
        <p onClick={() => navigate('/')}>WRITELY</p>
      </div>
      <div className='error-container'>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className='form-conteiner'>
        <div className='form-title'>
          <p>LOGIN</p>
        </div>
        <div className='form-body'>
          <div className='form-container'>
            <div className='form-inputs'>
              <div>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className='form-btn'>
              <input
                type='submit'
                value='Login'
                onClick={() => handleLogin(email, password)}
              />
            </div>
          </div>
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
