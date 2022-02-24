import { combineReducers } from 'redux';
import authenticate from './authReducer';
import cryptoCurrencies from './cryptocurrencyReducer';

 export const RootReducers = combineReducers({
    authenticate, cryptoCurrencies,
});

export type RootState =  ReturnType<typeof RootReducers>;
