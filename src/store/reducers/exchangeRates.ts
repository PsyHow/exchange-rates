import { ExchangeResponseData } from 'api/getExchangeRates/types';
import { ExchangeRatesType } from 'store/reducers/types';

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
      return { ...state, valuteList: action.payload };

    case 'SET_PREV_URL':
      return { ...state, prevUrl: action.payload };

    case 'SET_PREV_RATES_DATA':
      return { ...state, prevData: [...state.prevData, action.payload] };

    case 'SET_CURRENT_VALUTE':
      return {
        ...state,
        currentValute: action.payload,
      };

    default:
      return state;
  }
};
