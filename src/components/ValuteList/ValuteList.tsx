import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectValuteList } from 'selectors/valuteList';
import { fetchExchangeRates } from 'store/middlewares';

export const ValuteList = (): ReactElement => {
  const dispatch = useDispatch();
  const valuteList = useSelector(selectValuteList);
  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <td>Валюта</td>
          <td>Название</td>
          <td>Стоимость</td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(valuteList.Valute).map(value => (
          <tr key={value[1].ID}>
            <td>{value[0]}</td>
            <td>{value[1].Name}</td>
            <td>{value[1].Value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
