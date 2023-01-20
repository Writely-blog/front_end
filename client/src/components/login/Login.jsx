import React from 'react';
import { fetchLogin } from '../../fetchFunctions';

const Login = () => {
  const data = {
    email: 'test1@gmail.com',
    password: 'password123',
  };

  return (
    <div>
      <button onClick={() => console.log(fetchLogin({ ...data }))}>
        PRESS
      </button>
    </div>
  );
};

export default Login;
