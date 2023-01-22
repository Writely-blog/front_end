import BACKENDURL from '../backendUrl';
import axios from 'axios';

const authFetch = async (path, options) => {
  if (!options) options = {};
  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${window.sessionStorage.getItem('JWT_TOKEN')}`,
  };
  options = { ...options, url: path, baseURL: BACKENDURL };

  const res = await axios(options);

  if (res.status == 401) {
    window.sessionStorage.removeItem('JWT_TOKEN');
  }
  return await res;
};

const setSession = (secret) => {
  return window.sessionStorage.setItem('JWT_TOKEN', secret);
};

const endSession = () => {
  return window.sessionStorage.removeItem('JWT_TOKEN');
};

const isAuthenticated = () => {
  return window.sessionStorage.getItem('JWT_TOKEN') !== null;
};

export { authFetch, setSession, endSession, isAuthenticated };
