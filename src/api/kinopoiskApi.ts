import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/v1.4',
    prepareHeaders: (headers) =>
        headers.set('Authorization', 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M'),
})

export const apiSlice = createApi({
    reducerPath: 'kinopoiskApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        fetchMovie: builder.query({
            query: (movieId) => `movie/${movieId}`,
            transformResponse: (response) => response,
        }),
    }),
})

export const { useFetchMovieQuery } = apiSlice
