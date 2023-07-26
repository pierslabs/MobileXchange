import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const productsApi = axios.create({
  baseURL: BASE_URL,
  headers: {},
});
