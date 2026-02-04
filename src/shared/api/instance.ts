import axios from 'axios';

export const instance = axios.create({
  baseURL: '', // TODO: baseURL 연결
  timeout: 15000,
});

instance.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err),
);
