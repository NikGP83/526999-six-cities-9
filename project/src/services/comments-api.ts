import { BASE_URL } from './api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const commentsApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (build) => ({
    getComments: build.query({
      query: (id) => ({
        url:`comments/${id}`,
      }),
    }),
    addComment: build.mutation({
      query: ({id, token, ...comment}) => ({
        url:`comments/${id}`,
        method: 'POST',
        body: comment,
        'x-token': token,
      }),
    }),
  }),
});

export const {useGetCommentsQuery} = commentsApi;
