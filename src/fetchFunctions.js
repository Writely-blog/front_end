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
