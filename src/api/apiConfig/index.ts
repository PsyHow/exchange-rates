import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://www.cbr-xml-daily.ru/',
});
