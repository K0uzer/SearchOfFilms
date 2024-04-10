import { apiSlice } from './../api/kinopoiskApi'
import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '../features/movies/moviesSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
