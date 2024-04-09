import React from 'react'
import { useAppSelector } from '../app/hooks'
import { Navigate } from 'react-router'
import SearchAppBar from '../UI/SearchAppBar'
import FloatingActionButtonExtendedSize from '../UI/FloatingActionButtonExtendedSize'
import BasicSelect from '../UI/BasicSelect'
import {
    Button,
    CardActions,
    CardContent,
    Pagination,
    Typography,
} from '@mui/material'
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// const API_URL = 'https://api.kinopoisk.dev/v1.4/movie/12123'

// const api = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
//     endpoints: (builder) => ({
//         getPokemonByName: builder.query({
//             query: (movie) => ({
//                 url: `https://api.kinopoisk.dev/v1.4/${movie}`,
//                 headers: 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M',
//             }),
//         }),
//     }),
// })
// const { useGetFilmByIdQuery } = api
// console.log(api)

// const getContent = () =>
// {
//     fetch('https://api.kinopoisk.dev/v1.4/movie/12123', { headers:{'X-API-KEY': 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M'})
// }

const MoviesList = () => {
    const { login, password } = useAppSelector((state) => state.movies.user)
    if (!login && !password) return <Navigate to={'/auth'} />
    return (
        <>
            <SearchAppBar />
            <div>
                <div
                    style={{
                        display: 'flex',
                        margin: '10px',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>
                        <FloatingActionButtonExtendedSize>
                            По году
                        </FloatingActionButtonExtendedSize>
                        <FloatingActionButtonExtendedSize>
                            По стране
                        </FloatingActionButtonExtendedSize>
                        <FloatingActionButtonExtendedSize>
                            По возрастному рейтингу
                        </FloatingActionButtonExtendedSize>
                    </div>
                    <BasicSelect />
                </div>
                <div>
                    <ul
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        }}
                    >
                        <li style={{ border: '1px solid black' }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    adw
                                </Typography>
                                <Typography variant="h5" component="div">
                                    awd
                                </Typography>
                                <Typography
                                    sx={{ mb: 1.5 }}
                                    color="text.secondary"
                                >
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </li>
                    </ul>
                </div>
                <div style={{ position: 'fixed', bottom: '10vh', left: '45%' }}>
                    <Pagination count={10} />
                </div>
            </div>
        </>
    )
}

export default MoviesList
