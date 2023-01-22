import React, { useState } from 'react';
import './Login-Register.css';
import { fetchRegister } from '../../fetchFunctions';
import { useNavigate } from 'react-router-dom';
import { setSession } from '../../auth';

const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMessage, setErrorMesssage] = useState('');

  const handleRegister = async (userName, email, password, password2) => {
    try {
      const res = await fetchRegister({
        user_name: userName,
        email,
        password,
        password2,
      });
      console.log(res);
      if (res?.data?.hasOwnProperty('email', 'token')) {
        setSession(res.data.token);
        navigate('/myPosts');
      } else {
        setErrorMesssage(res?.response?.data?.msg);
      }
    } catch (err) {
      setErrorMesssage(err?.response?.data?.msg);
    }
  };

  return (
    <div className='container'>
      <div className='title'>
        <p>WRITELY</p>
      </div>
      <div className='error-container'>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className='form-conteiner'>
        <div className='form-title'>
          <p>SIGNUP</p>
        </div>
        <div className='form-body'>
          <div className='form-container'>
            <div className='form-inputs'>
              <div>
                <input
                  type='username'
                  id='username'
                  name='username'
                  placeholder='Username'
                  onChange={(event) => setUserName(event.target.value)}
                  required
                />
              </div>
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
              <div>
                <input
                  type='password'
                  id='password2'
                  name='password2'
                  placeholder='Repiat Password'
                  onChange={(event) => setPassword2(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className='form-btn'>
              <input
                type='submit'
                value='Signup'
                onClick={() =>
                  handleRegister(userName, email, password, password2)
                }
              />
            </div>
          </div>
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
