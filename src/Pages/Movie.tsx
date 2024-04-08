import React from 'react'
import SearchAppBar from '../UI/SearchAppBar'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

const Movie = () => {
    const navigate = useNavigate()

    const handlePath = () => navigate('/')

    return (
        <div>
            <SearchAppBar />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <p>Название фильма</p>
                    <p>Описание</p>
                    <p>
                        постеры, отображение которых реализовано в виде
                        «карусели»
                    </p>
                    <ul>
                        <li>список сезонов и серий</li>
                    </ul>
                </div>
                <div>
                    <p>Оценка фильма</p>
                    <ul>
                        <li>Список актеров</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>отзывы пользователей</li>
                    </ul>
                </div>
            </div>
            <Button
                type="button"
                style={{ margin: '10px' }}
                variant="contained"
                onClick={handlePath}
            >
                Назад
            </Button>
            <ul>
                <li>Карусель списка фильмов, похожих на текущий</li>
            </ul>
        </div>
    )
}

export default Movie
