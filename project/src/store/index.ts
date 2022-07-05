import { createApi } from './../services/api';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const api = createApi();

export const store = configureStore({ reducer });


export default store;


