// eslint-disable-next-line import/no-named-default
import { default as axiosBase } from 'axios';

export const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});
