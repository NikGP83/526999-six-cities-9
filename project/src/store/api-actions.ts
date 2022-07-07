import { AuthData } from './../types/auth-data';
import { saveToken } from './../services/token';
import { api, store } from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { loadData, changeAuthStatus } from './action';
import { UserData } from '../types/user-data';
import { errorHandle } from '../services/error-handle';

export const fetchOffers = createAsyncThunk(
  'load-data',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Hotels);
      store.dispatch(loadData(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'check-user-auth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user-login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);
