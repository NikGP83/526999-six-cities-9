import { BASE_URL } from './api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (build) => ({
    getComments: build.query({
      query: () => ({
        url:'/comments',
      }),
    }),
  }),
});

export const {useGetCommentsQuery} = commentsApi;
