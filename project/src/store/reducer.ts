import { IHotels } from './../types/types';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadData } from './action';


interface HotelsState {
  offerList: IHotels[];
  city: string;
}

const initialState: HotelsState = {
  offerList: [],
  city: 'Paris',
};

export const reducer = createReducer (initialState, (builder) => {
  builder
    .addCase(loadData, (state, action) => {
      state.offerList.push(...action.payload);
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

