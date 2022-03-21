import { ReactElement, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './style/ValuteList.module.scss';

import { Modal } from 'components/common';
import { PrevDaysRates } from 'components/PrevDaysRates';
import { relDiff } from 'const';
import { selectPrevExchangeData, selectValuteList } from 'selectors/valuteList';
import { setCurrentValute } from 'store/actions';
import { fetchExchangeRates } from 'store/middlewares';

export const ValuteList = (): ReactElement => {
  const dispatch = useDispatch();

  const valuteList = useSelector(selectValuteList);
  const prevData = useSelector(selectPrevExchangeData);

  const [openModal, setOpenModal] = useState<boolean>(false);

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
            Object.entries(valuteList.Valute).map(([valuteName, valute]) => {
              const handleSelectValue = (): void => {
                setOpenModal(!openModal);
                dispatch(setCurrentValute(valuteName));
              };
              return (
                <tr key={valute.ID} className={style.tooltip} onClick={handleSelectValue}>
                  <td>
                    {valuteName}
                    <div className={style.tooltipText}>{valute.Name}</div>
                  </td>
                  <td>{`${valute.Value} ₽`}</td>
                  <td>{relDiff(valute.Value, valute.Previous)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Modal active={openModal} setActive={setOpenModal}>
        {prevData.length >= 10 ? (
          <PrevDaysRates />
        ) : (
          <span>Получаем данные с сервера . . .</span>
        )}
      </Modal>
    </div>
  );
};
