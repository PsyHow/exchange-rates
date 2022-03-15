import { ExchangeResponseData } from 'api/getExchangeRates/types';
import { AppStoreType } from 'store/store';

export const selectValuteList = (state: AppStoreType): ExchangeResponseData =>
  state.exchangeRatesReducer.valuteList;
