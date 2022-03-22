import { ReactElement, useEffect, useState } from 'react';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import style from './App.module.scss';

import { ValuteList } from 'components/ValuteList';
import {
  selectIsLoading,
  selectPervDate,
  selectPervUrl,
  selectPrevExchangeData,
} from 'selectors/valuteList';
import { fetchExchangeRates, fetchPrevExchangeRates } from 'store/middlewares';

// const fetchPrevValuteHandle = async (callback: any) => {
//   const result = await callback();
//   console.log(result);
// };

export const App = (): ReactElement => {
  const dispatch = useDispatch();

  const url = useSelector(selectPervUrl);
  const date = useSelector(selectPervDate);
  const isLoading = useSelector(selectIsLoading);
  const prevData = useSelector(selectPrevExchangeData);

  const subDate = moment().subtract(20, 'days').format();
  const formatUrl = url && url.substring(23);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, []);

  useEffect(() => {
    if (clicked) {
      if (!isLoading && prevData.length < 10) {
        dispatch(fetchPrevExchangeRates(formatUrl));
      }
    }
  }, [clicked, prevData, isLoading]);

  const handleValuteClick = (): void => {
    setClicked(true);
  };

  return (
    <div className={style.app}>
      <ValuteList onClick={handleValuteClick} />
    </div>
  );
};
