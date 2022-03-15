/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectValuteList } from 'selectors/valuteList';
import { fetchExchangeRates } from 'store/middlewares';

export const ValuteList = (): ReactElement => {
  const dispatch = useDispatch();
  const valuteList = useSelector(selectValuteList);
  const valuteNameList = valuteList && Object.keys(valuteList);

  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, []);

  console.log(valuteList);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {valuteNameList &&
        valuteNameList.map((list, index) => <span key={index}>{list}</span>)}
    </div>
  );
};
