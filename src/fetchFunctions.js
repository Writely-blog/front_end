import { authFetch } from './auth';

export const fetchLogin = async (input_data) => {
  return await authFetch('/auth/login', {
    data: JSON.stringify(input_data),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
};

export const fetchRegister = async (input_data) => {
  return await authFetch('/auth/register', {
    data: JSON.stringify(input_data),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
};

export const fetchAllPosts = async () => {
  return await authFetch('/posts', {
    method: 'GET',
  });
};

export const fetchMyPosts = async () => {
  return await authFetch('/posts/mine', {
    method: 'GET',
  });
};

export const fetchGetUserName = async (id) => {
  const result = await authFetch(`/auth/user/${id}`, {
    method: 'GET',
  });

  return result?.data?.user_name;
};
