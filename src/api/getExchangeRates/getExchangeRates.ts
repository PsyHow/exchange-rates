import { ExchangeResponseData } from './types';

import { instance } from 'api/apiConfig';

export const ratesApi = {
  getExchangeRates() {
    return instance.get<ExchangeResponseData>('daily_json.js');
  },
  getPrevRates(date: string) {
    return instance.get<ExchangeResponseData>(`${date}`);
  },
};
