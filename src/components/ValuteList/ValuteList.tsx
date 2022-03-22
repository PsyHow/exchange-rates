import { FC, ReactElement, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './style/ValuteList.module.scss';

import { Modal } from 'components/common';
import { PrevDaysRates } from 'components/PrevDaysRates';
import { relDiff } from 'const';
import { selectPrevExchangeData, selectValuteList } from 'selectors/valuteList';
import { setCurrentValute } from 'store/actions';

type ValuteListProps = {
  onClick: () => void;
};

export const ValuteList: FC<ValuteListProps> = ({ onClick }) => {
  const dispatch = useDispatch();

  const valuteList = useSelector(selectValuteList);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const mappedValute = valuteList.Valute
    ? Object.entries(valuteList.Valute).map(([valuteName, valute]) => {
        const handleSelectValue = (): void => {
          onClick();
          setOpenModal(true);
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
        <tbody>{mappedValute}</tbody>
      </table>
      <Modal active={openModal} setActive={setOpenModal}>
        <PrevDaysRates />
      </Modal>
    </div>
  );
};
