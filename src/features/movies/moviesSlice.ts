import { createSlice } from '@reduxjs/toolkit'
import { QueryParams } from '../../types/types'

interface MoviesState {
    user: {
        login: string
        password: string
    }
    queryParams: QueryParams
    openReview: boolean
}

const initialState: MoviesState = {
    user: {
        login: 'user',
        password: 'user',
    },
    queryParams: {
        query: '',
        page: 1,
        limit: 10,
        year: '',
        country: '',
        rate: 0,
    },
    openReview: false,
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
        },
        updateQueryParams: (state, action) => {
            state.queryParams = action.payload
        },
    },
})

export const { updateUser, updateQueryParams } = moviesSlice.actions

export default moviesSlice.reducer