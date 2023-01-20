import { authFetch } from './auth';

export const fetchLogin = async (data) => {
  return await authFetch('/auth/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
