// utils/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // enable if you’re using cookies
});

export default api;
