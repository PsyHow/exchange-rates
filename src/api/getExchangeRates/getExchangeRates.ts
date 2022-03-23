import { instance } from 'api/apiConfig';
import { ExchangeResponseData } from 'api/getExchangeRates/types';

export const ratesApi = {
  getExchangeRates() {
    return instance.get<ExchangeResponseData>('daily_json.js');
  },
  getPrevRates(date: string) {
    return instance.get<ExchangeResponseData>(`${date}`);
  },
};
