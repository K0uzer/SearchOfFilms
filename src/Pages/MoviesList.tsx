import React from 'react'
import { useAppSelector } from '../app/hooks'
import { Navigate } from 'react-router'
import SearchAppBar from '../UI/SearchAppBar'
import FloatingActionButtonExtendedSize from '../UI/FloatingActionButtonExtendedSize'
import BasicSelect from '../UI/BasicSelect'
import OutlinedCard from '../UI/OutlinedCard'
import { Pagination } from '@mui/material'

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
                        <li>
                            <OutlinedCard />
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
