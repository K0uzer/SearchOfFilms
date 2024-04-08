import React from 'react'
// import BasicTextFields from '../UI/BasicTextFields'
import AppBar from '../UI/SearchAppBar'
import MediaCard from '../UI/MediaCard'
import { useAppSelector } from '../app/hooks'
import { Navigate } from 'react-router'
// import PaginationLink from '../UI/PaginationLink'

const MoviesList = () =>
{
    const {login, password} = useAppSelector((state => state.movies.user))
    if(!login && !password) return <Navigate to={'/auth'} />
    return (
        <>
            <AppBar />
            <ul>
                <li>
                    <MediaCard />
                </li>
            </ul>
            {/* <PaginationLink /> */}
        </>
    )
}

export default MoviesList
