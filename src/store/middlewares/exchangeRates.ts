import { ratesApi } from 'api/getExchangeRates';
import { AppThunkType } from 'store';
import { isLoading, setPrevExchangeData, setPrevUrl, setRateData } from 'store/actions';

export const fetchExchangeRates = (): AppThunkType => async dispatch => {
  dispatch(isLoading(true));

  try {
    const res = await ratesApi.getExchangeRates();
    dispatch(setRateData(res.data));
    dispatch(setPrevUrl(res.data.PreviousURL));
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

      return res;
    } catch (error) {
      throw new Error('Something wrong');
    } finally {
      dispatch(isLoading(false));
    }
  };
