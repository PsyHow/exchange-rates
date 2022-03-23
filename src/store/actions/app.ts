export const isLoading = (payload: boolean) =>
  ({
    type: 'APP_IS_LOADING',
    payload,
  } as const);

export const setIsModalOpen = (payload: boolean) =>
  ({
    type: 'APP_IS_MODAL_OPEN',
    payload,
  } as const);
