import { IHotels } from './../types/types';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadData, changeAuthStatus, setError } from './action';
import { AuthorizationStatus } from '../const';


interface HotelsState {
  offerList: IHotels[];
  city: string;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  error: string;
}

const initialState: HotelsState = {
  offerList: [],
  city: 'Paris',
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
};

export const reducer = createReducer (initialState, (builder) => {
  builder
    .addCase(loadData, (state, action) => {
      state.offerList.push(...action.payload);
      state.isDataLoaded = true;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action)=> {
      state.error = action.payload;
    });
});

