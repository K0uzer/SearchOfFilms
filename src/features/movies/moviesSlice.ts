import { createSlice } from '@reduxjs/toolkit'

export interface MoviesState {
    user: {
        login: string,
        password: string
    }
}

const initialState: MoviesState = {
    user: {
        login: '',
        password: ''
    }
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateUser } = moviesSlice.actions

export default moviesSlice.reducer