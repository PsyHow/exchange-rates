import { ReactElement } from 'react';

import moment from 'moment';
import { useSelector } from 'react-redux';

import style from './style/PrevDaysRates.module.scss';

import { selectCurrentValute, selectPrevExchangeData } from 'selectors/valuteList';

export const PrevDaysRates = (): ReactElement => {
  const currentValute = useSelector(selectCurrentValute);
  const prevData = useSelector(selectPrevExchangeData);

  const mappedPrevData = prevData.map(data => {
    const date = moment(data.Date);
    return (
      <tr key={data.Date}>
        <td>{date.format('DD/MM/YYYY')}</td>
        <td>{data.Valute[currentValute].Value}</td>
      </tr>
    );
  });

  if (prevData.length < 10) {
    return (
      <div className={style.wrapper}>
        <span>Получаем данные с сервера . . .</span>
      </div>
    );
  }

  return (
    <div className={style.wrapper}>
      <h3>{currentValute}</h3>
      <table>
        <thead>
          <tr>
            <td>Дата</td>
            <td>Стоимость</td>
          </tr>
        </thead>
        <tbody>{mappedPrevData}</tbody>
      </table>
    </div>
  );
};
