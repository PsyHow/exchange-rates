/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './style/Modal.module.scss';

import { selectIsModalOpen } from 'selectors/app';
import { setIsModalOpen } from 'store/actions/app';

export const Modal: FC = memo(({ children }) => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectIsModalOpen);

  const handleCloseClick = (): void => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <div
      className={isModalOpen ? `${style.modal} ${style.modalActive}` : style.modal}
      onClick={handleCloseClick}
    >
      <div
        className={
          isModalOpen ? `${style.content} ${style.contentActive}` : style.content
        }
        onClick={event => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
});
