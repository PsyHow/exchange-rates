import { ExchangeResponseData } from 'api/getExchangeRates/types';

export const setRateData = (data: ExchangeResponseData) =>
  ({
    type: 'SET_RATE_DATA',
    data,
  } as const);

export const setPrevExchangeData = (data: ExchangeResponseData) =>
  ({
    type: 'SET_PREV_RATES_DATA',
    data,
  } as const);

export const setPrevUrl = (url: string) =>
  ({
    type: 'SET_PREV_URL',
    url,
  } as const);

export const setPrevDate = (date: string) =>
  ({
    type: 'SET_PREV_DATE',
    date,
  } as const);

export const setCurrentValute = (valute: string) =>
  ({
    type: 'SET_CURRENT_VALUTE',
    valute,
  } as const);
