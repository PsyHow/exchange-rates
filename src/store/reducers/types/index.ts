import {
  setPrevExchangeData,
  setPrevDate,
  setPrevUrl,
  setRateData,
  setCurrentValute,
} from 'store/actions';

export type ExchangeRatesType =
  | ReturnType<typeof setRateData>
  | ReturnType<typeof setPrevExchangeData>
  | ReturnType<typeof setPrevDate>
  | ReturnType<typeof setCurrentValute>
  | ReturnType<typeof setPrevUrl>;
