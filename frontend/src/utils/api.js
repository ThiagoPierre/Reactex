// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
import { tokenGang } from './constant';

const myAxios = axios.create({
  baseURL: 'http://localhost:3333/api',
});

myAxios.interceptors.request.use((request) => {
  request.headers.Authorization = `bearer ${localStorage.getItem(tokenGang)}`;

  return request;
});

export default myAxios;
