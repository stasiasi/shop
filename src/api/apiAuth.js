import axiosInstance from './apiHelper';

export const auth = (username, password) => {
  return axiosInstance.post(`/auth/login`, {
    username: username,
    password: password
  });
};

export const getMe = async (token) => {
  return axiosInstance.get('/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};