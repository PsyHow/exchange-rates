import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://www.cbr-xml-daily.ru/',
  headers: {
    'Permissions-Policy': 'interest-cohort=()',
    'Access-Control-Allow-Origin': 'www.cbr-xml-daily.ru',
  },
});
