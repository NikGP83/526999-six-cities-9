import { createAction } from '@reduxjs/toolkit';

export const loadData = createAction<[]>('load-data');
export const changeCity = createAction('change-city');
export const offerList = createAction('offer-list');
