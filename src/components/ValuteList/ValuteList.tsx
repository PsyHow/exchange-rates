import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './style/ValuteList.module.scss';

import { currentDiffHandle } from 'const';
import { selectValuteList } from 'selectors/valuteList';
import { fetchExchangeRates } from 'store/middlewares';

export const ValuteList = (): ReactElement => {
  const dispatch = useDispatch();

  const valuteList = useSelector(selectValuteList);

  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, []);

  return (
    <div className={style.tableWrapper}>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Валюта</td>
            <td>Курс</td>
            <td>Разница</td>
          </tr>
        </thead>
        <tbody>
          {valuteList.Valute &&
            Object.entries(valuteList.Valute).map(([valuteName, valute]) => (
              <tr key={valute.ID} className={style.tooltip}>
                <td>
                  {valuteName}
                  <div className={style.tooltipText}>{valute.Name}</div>
                </td>
                <td>{`${valute.Value} ₽`}</td>
                <td>{currentDiffHandle(valute.Value, valute.Previous)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
