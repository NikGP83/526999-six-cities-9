import { createAction } from '@reduxjs/toolkit';

export const loadData = createAction<[]>('load-data');
export const changeCity = createAction<string>('change-city');
export const offerList = createAction('offer-list');
