import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CurrencyType } from '../types/types';

const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory';

export const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  tagTypes: ['currency'],

  endpoints: (builder) => ({
    getCurrency: builder.query<CurrencyType[], void>({
      query: () => '/exchange?json',
      providesTags: ['currency'],
    })
  })
});

export const {
  useGetCurrencyQuery,
} = api;
