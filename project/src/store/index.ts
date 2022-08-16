import { commentsApi } from './../services/comments-api';
import { createApi } from './../services/api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const api = createApi();

const rootReducer = combineReducers({
  reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(commentsApi.middleware),
});


export default store;


