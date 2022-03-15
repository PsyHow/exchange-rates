import { ExchangeRatesType } from './types';

import { ExchangeResponseData } from 'api/getExchangeRates/types';

const initialState = {
  rateData: null,
  valuteList: {} as ExchangeResponseData,
};

type InitialStateType = typeof initialState;

export const exchangeRatesReducer = (
  state = initialState,
  action: ExchangeRatesType,
): InitialStateType => {
  switch (action.type) {
    case 'SET_RATE_DATA':
      return { ...state, valuteList: action.data };
    default:
      return state;
  }
};
