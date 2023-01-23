import { authFetch } from './auth';

// POST

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

export const fetchCreatePost = async (input_data) => {
  return await authFetch('/posts', {
    data: JSON.stringify(input_data),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
};

// GET

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

export const fetchOnePost = async (id) => {
  return await authFetch(`/posts/${id}`, {
    method: 'GET',
  });
};

export const fetchGetUserName = async (id) => {
  const result = await authFetch(`/auth/user/${id}`, {
    method: 'GET',
  });

  return result?.data?.user_name;
};

//PUT

export const fetchEditPost = async (post_id, input_data) => {
  return await authFetch(`/posts/${post_id}`, {
    data: JSON.stringify(input_data),
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });
};
