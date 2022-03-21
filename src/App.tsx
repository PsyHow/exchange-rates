import { ReactElement, useEffect } from 'react';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import style from './App.module.scss';

import { ValuteList } from 'components/ValuteList';
import { selectPervDate, selectPervUrl } from 'selectors/valuteList';
import { fetchPrevExchangeRates } from 'store/middlewares/exchangeRates';

export const App = (): ReactElement => {
  const dispatch = useDispatch();

  const url = useSelector(selectPervUrl);
  const date = useSelector(selectPervDate);

  const subDate = moment().subtract(20, 'days').format();
  const formatUrl = url && url.substring(23);

  useEffect(() => {
    setTimeout(() => {
      if (formatUrl && date > subDate) {
        dispatch(fetchPrevExchangeRates(formatUrl));
      }
    }, 500);
  }, [date]);

  return (
    <div className={style.app}>
      <ValuteList />
    </div>
  );
};
