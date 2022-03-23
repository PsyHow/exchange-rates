import { ReactElement, useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './App.module.scss';

import { ValuteList } from 'components/ValuteList';
import { selectIsLoading } from 'selectors/app';
import {
  selectPervUrl,
  selectPrevExchangeData,
  selectValuteList,
} from 'selectors/valuteList';
import { fetchExchangeRates, fetchPrevExchangeRates } from 'store/middlewares';

export const App = (): ReactElement => {
  const dispatch = useDispatch();

  const url = useSelector(selectPervUrl);
  const isLoading = useSelector(selectIsLoading);
  const prevData = useSelector(selectPrevExchangeData);
  const valuteList = useSelector(selectValuteList);

  const [clicked, setClicked] = useState(false);

  const formatUrl = url.substring(23);

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

  const handleValuteClick = useCallback((): void => {
    setClicked(true);
  }, []);

  return (
    <div className={style.app}>
      <ValuteList valuteList={valuteList} onClick={handleValuteClick} />
    </div>
  );
};
