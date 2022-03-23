import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { exchangeRatesReducer, appReducer } from 'store/reducers';
import { AppActionType, ExchangeRatesType } from 'store/reducers/types';

const reducers = combineReducers({
  exchangeRatesReducer,
  appReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type AppStoreType = ReturnType<typeof reducers>;

type AppActionsType = ExchangeRatesType | AppActionType;

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStoreType,
  unknown,
  AppActionsType
>;
