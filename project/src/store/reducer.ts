import { IHotels } from './../types/types';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadData } from './action';


interface HotelsState {
  data: IHotels[];
  city: string;
  'offer-list': [];
}

const initialState: HotelsState = {
  data: [],
  city: 'Paris',
  'offer-list': [],
};

export const reducer = createReducer (initialState, (builder) => {
  builder
    .addCase(loadData, (state, action) => {
      state.data.push(...action.payload);
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

