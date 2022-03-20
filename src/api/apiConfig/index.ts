import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.cbr-xml-daily.ru/',
  headers: {
    'Permissions-Policy': 'interest-cohort=()',
    'Access-Control-Allow-Origin': '*',
  },
});
