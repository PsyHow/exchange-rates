import {
  setPrevExchangeData,
  setPrevUrl,
  setRateData,
  setCurrentValute,
  isLoading,
  setIsModalOpen,
} from 'store/actions';

export type ExchangeRatesType =
  | ReturnType<typeof setRateData>
  | ReturnType<typeof setPrevExchangeData>
  | ReturnType<typeof setCurrentValute>
  | ReturnType<typeof setPrevUrl>;

export type AppActionType =
  | ReturnType<typeof isLoading>
  | ReturnType<typeof setIsModalOpen>;
