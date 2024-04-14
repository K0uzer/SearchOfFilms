import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Movie, QueryParams, ResponseMovies } from '../types/types'

const apiBaseUrl = 'https://api.kinopoisk.dev/'
const apiKey = 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M'

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: apiBaseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-API-KEY', apiKey)
            return headers
        },
    }),
    tagTypes: ['Movies'],
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: ({ page = 1, limit = 10, query = '' }: QueryParams) =>
                `v1.4/movie/search?page=${page}&limit=${limit}&query=${query}`,
            providesTags: ['Movies'],
            transformResponse: (response: ResponseMovies) => response.docs,
        }),
        getMovie: builder.query({
            query: (movieId) => `v1.4/movie/${movieId}`,
            providesTags: ['Movies'],
            transformResponse: (response: Movie) => response,
        }),
        getReview: builder.query({
            query: (movieId) => `v1.4/review?${movieId}`,
            providesTags: ['Movies'],
            transformResponse: (response) => response.docs,
        }),
        getPosters: builder.query({
            query: (movieId) => `v1.4/image?${movieId}`,
            providesTags: ['Movies'],
            transformResponse: (response) => response.docs,
        }),
    }),
})

export const {
    useGetMoviesQuery,
    useGetMovieQuery,
    useGetPostersQuery,
    useGetReviewQuery,
} = moviesApi