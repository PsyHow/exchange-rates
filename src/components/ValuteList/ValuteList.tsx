import { FC, memo } from 'react';

import { useDispatch } from 'react-redux';

import style from './style/ValuteList.module.scss';

import { Modal } from 'components/common';
import { PrevDaysRates } from 'components/PrevDaysRates';
import { ValuteListProps } from 'components/ValuteList/types';
import { relDiff } from 'const';
import { setIsModalOpen, setCurrentValute } from 'store/actions';

export const ValuteList: FC<ValuteListProps> = memo(({ onClick, valuteList }) => {
  const dispatch = useDispatch();

  const mappedValuteList = valuteList.Valute
    ? Object.entries(valuteList.Valute).map(([valuteName, valute]) => {
        const handleSelectValue = (): void => {
          onClick();
          dispatch(setIsModalOpen(true));
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
      })
    : null;

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
        <tbody>{mappedValuteList}</tbody>
      </table>
      <Modal>
        <PrevDaysRates />
      </Modal>
    </div>
  );
});
