import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const baseQuery = fetchBaseQuery({
//     baseUrl: 'https://api.kinopoisk.dev/v1.4',
//     prepareHeaders: (headers) =>
//         headers.set('Authorization', 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M'),
// })

// export const apiSlice = createApi({
//     reducerPath: 'kinopoiskApi',
//     baseQuery: baseQuery,
//     endpoints: (builder) => ({
//         fetchMovie: builder.query({
//             query: (name) => `search?page=1&limit=10&query=${name}`,
//             transformResponse: (response) => response,
//         }),
//     }),
// })

const apiBaseUrl = 'https://api.kinopoisk.dev/v1.4'
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
        getMoviesByName: builder.query({
            query: (title: string) => `movie/search?page=1&limit=10&query=${title}`,
            providesTags: ['Movies'],
        }),
    }),
})

export const { useGetMoviesByNameQuery } = moviesApi
