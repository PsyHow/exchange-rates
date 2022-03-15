import { ExchangeResponseData } from 'api/getExchangeRates/types';

export const setRateData = (data: ExchangeResponseData) =>
  ({
    type: 'SET_RATE_DATA',
    data,
  } as const);
