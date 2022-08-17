import { IComment } from './../types/types';
import { BASE_URL } from './api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const commentsApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['comments'],
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (build) => ({
    getComments: build.query<IComment[], {id: string, token: string}>({
      query: ({id, token}) => ({
        headers: {'X-Token': token},
        url:`comments/${id}`,
      }),
      providesTags: ['comments'],
    }),
    getNearbyPlaces: build.query({
      query: (id) => ({
        url: `hotels/${id}/nearby`,
      }),
    }),
    addComment: build.mutation<IComment[], Pick<IComment, 'id'|'comment'|'rating'> & {token: string} >({
      query: ({id, token, comment, rating}) => ({
        url:`comments/${id}`,
        body: {comment, rating},
        method: 'POST',
        headers:{'X-Token': token, 'Content-Type': 'application/json'},
      }),
      invalidatesTags: ['comments'],
    }),
  }),
});

export const {useGetCommentsQuery} = commentsApi;
