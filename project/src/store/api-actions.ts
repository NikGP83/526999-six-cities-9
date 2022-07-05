import { api, store } from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { loadData } from './action';

export const fetchOffers = createAsyncThunk(
  'load-data',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Hotels);
      store.dispatch(loadData(data));
    } catch (error) {
      window.console.warn(error);
    }
  },
);
