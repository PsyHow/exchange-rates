import { ExchangeResponseData } from 'api/getExchangeRates/types';
import { AppStoreType } from 'store/store';

export const selectValuteList = (state: AppStoreType): ExchangeResponseData =>
  state.exchangeRatesReducer.valuteList;

export const selectPervUrl = (state: AppStoreType): string =>
  state.exchangeRatesReducer.prevUrl;

export const selectPervDate = (state: AppStoreType): string =>
  state.exchangeRatesReducer.prevDate;

export const selectPrevExchangeData = (state: AppStoreType): ExchangeResponseData[] =>
  state.exchangeRatesReducer.prevData;

export const selectCurrentValute = (state: AppStoreType): string =>
  state.exchangeRatesReducer.currentValute;
