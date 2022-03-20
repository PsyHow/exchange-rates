import { ratesApi } from 'api/getExchangeRates';
import { setPrevExchangeData, setPrevDate, setPrevUrl, setRateData } from 'store/actions';
import { AppThunkType } from 'store/store';

export const fetchExchangeRates = (): AppThunkType => async dispatch => {
  try {
    const res = await ratesApi.getExchangeRates();
    dispatch(setRateData(res.data));
    dispatch(setPrevUrl(res.data.PreviousURL));
    dispatch(setPrevDate(res.data.PreviousDate));
  } catch (error) {
    console.log('something worng');
  }
};

export const fetchPrevExchangeRates =
  (url: string): AppThunkType =>
  async dispatch => {
    try {
      const res = await ratesApi.getPrevRates(url);
      dispatch(setPrevExchangeData(res.data));
      dispatch(setPrevUrl(res.data.PreviousURL));
      dispatch(setPrevDate(res.data.PreviousDate));
    } catch (error) {
      console.log('something worng');
    }
  };
