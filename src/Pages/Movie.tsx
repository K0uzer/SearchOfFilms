import React from 'react'
import { Navigate } from 'react-router'
import { useAppSelector } from '../app/hooks'

const Movie = () => {
    const { login, password } = useAppSelector((state) => state.movies.user)
    if (!login && !password) return <Navigate to={'/auth'} />

    return (
        <div>
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
            <ul>
                <li>Карусель списка фильмов, похожих на текущий</li>
            </ul>
        </div>
    )
}

export default Movie
