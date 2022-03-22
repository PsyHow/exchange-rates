import {
  setPrevExchangeData,
  setPrevDate,
  setPrevUrl,
  setRateData,
  setCurrentValute,
  isLoading,
} from 'store/actions';

export type ExchangeRatesType =
  | ReturnType<typeof setRateData>
  | ReturnType<typeof setPrevExchangeData>
  | ReturnType<typeof setPrevDate>
  | ReturnType<typeof setCurrentValute>
  | ReturnType<typeof isLoading>
  | ReturnType<typeof setPrevUrl>;
