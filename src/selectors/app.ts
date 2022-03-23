import { AppStoreType } from 'store';

export const selectIsLoading = (state: AppStoreType): boolean =>
  state.appReducer.isLoading;

export const selectIsModalOpen = (state: AppStoreType): boolean =>
  state.appReducer.isModalOpen;
