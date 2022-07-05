import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';

export const loadData = createAction<[]>('load-data');
export const changeCity = createAction<string>('change-city');
export const offerList = createAction('offer-list');
export const changeAuthStatus = createAction<AuthorizationStatus>('change-auth-status');
