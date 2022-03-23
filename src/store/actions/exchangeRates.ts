import { ExchangeResponseData } from 'api/getExchangeRates/types';

export const setRateData = (payload: ExchangeResponseData) =>
  ({
    type: 'SET_RATE_DATA',
    payload,
  } as const);

export const setPrevExchangeData = (payload: ExchangeResponseData) =>
  ({
    type: 'SET_PREV_RATES_DATA',
    payload,
  } as const);

export const setPrevUrl = (payload: string) =>
  ({
    type: 'SET_PREV_URL',
    payload,
  } as const);

export const setCurrentValute = (payload: string) =>
  ({
    type: 'SET_CURRENT_VALUTE',
    payload,
  } as const);
