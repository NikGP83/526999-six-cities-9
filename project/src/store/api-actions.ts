import { dropName } from './../services/login';
import { TIMEOUT_SHOW_ERROR } from './../const';
import { AuthData } from './../types/auth-data';
import { saveToken, dropToken } from './../services/token';
import { api, store } from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { loadData, changeAuthStatus, setError } from './action';
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

export const singOut = createAsyncThunk(
  'drop-token',
  () => {
    dropToken();
    dropName();
    store.dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'clear-error',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
