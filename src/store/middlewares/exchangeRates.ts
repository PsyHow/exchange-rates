import { ratesApi } from 'api/getExchangeRates';
import {
  setPrevExchangeData,
  setPrevDate,
  setPrevUrl,
  setRateData,
  isLoading,
} from 'store/actions';
import { AppThunkType } from 'store/store';

export const fetchExchangeRates = (): AppThunkType => async dispatch => {
  dispatch(isLoading(true));
  try {
    const res = await ratesApi.getExchangeRates();
    dispatch(setRateData(res.data));
    dispatch(setPrevUrl(res.data.PreviousURL));
    dispatch(setPrevDate(res.data.PreviousDate));
  } catch (error) {
    throw new Error('Something wrong');
  } finally {
    dispatch(isLoading(false));
  }
};

export const fetchPrevExchangeRates =
  (url: string): AppThunkType =>
  async dispatch => {
    dispatch(isLoading(true));
    try {
      const res = await ratesApi.getPrevRates(url);
      dispatch(setPrevExchangeData(res.data));
      dispatch(setPrevUrl(res.data.PreviousURL));
      dispatch(setPrevDate(res.data.PreviousDate));
      return res;
    } catch (error) {
      throw new Error('Something wrong');
    } finally {
      dispatch(isLoading(false));
    }
  };
