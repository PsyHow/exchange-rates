import { ratesApi } from 'api/getExchangeRates';
import { setRateData } from 'store/actions';
import { AppThunkType } from 'store/store';

export const fetchExchangeRates = (): AppThunkType => async dispatch => {
  try {
    const res = await ratesApi.getExchangeRates();
    dispatch(setRateData(res.data));
  } catch (error) {
    console.log('something worng');
  }
};
