import { AppActionType } from 'store/reducers/types';

const initialState = {
  isModalOpen: false,
  isLoading: false,
};

type InitialStateType = typeof initialState;

export const appReducer = (
  state = initialState,
  action: AppActionType,
): InitialStateType => {
  switch (action.type) {
    case 'APP_IS_LOADING':
      return { ...state, isLoading: action.payload };

    case 'APP_IS_MODAL_OPEN':
      return { ...state, isModalOpen: action.payload };

    default:
      return state;
  }
};
