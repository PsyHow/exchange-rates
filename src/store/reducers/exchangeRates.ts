import { ExchangeRatesType } from './types';

import { ExchangeResponseData } from 'api/getExchangeRates/types';

const initialState = {
  valuteList: {} as ExchangeResponseData,
  prevData: [] as ExchangeResponseData[],
  prevUrl: '',
  prevDate: '',
  currentValute: 'AUD',
};

type InitialStateType = typeof initialState;

export const exchangeRatesReducer = (
  state = initialState,
  action: ExchangeRatesType,
): InitialStateType => {
  switch (action.type) {
    case 'SET_RATE_DATA':
      return { ...state, valuteList: action.data };
    case 'SET_PREV_URL':
      return { ...state, prevUrl: action.url };
    case 'SET_PREV_DATE':
      return { ...state, prevDate: action.date };
    case 'SET_PREV_RATES_DATA':
      return { ...state, prevData: [...state.prevData, action.data] };
    case 'SET_CURRENT_VALUTE':
      return {
        ...state,
        currentValute: action.valute,
      };
    default:
      return state;
  }
};
