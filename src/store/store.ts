import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { ExchangeRatesType } from './reducers/types';

import { exchangeRatesReducer } from 'store/reducers';

const reducers = combineReducers({
  exchangeRatesReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type AppStoreType = ReturnType<typeof reducers>;

type AppActionsType = ExchangeRatesType;

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStoreType,
  unknown,
  AppActionsType
>;
