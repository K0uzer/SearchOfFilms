import { Navigate, useParams } from 'react-router'
import { useAppSelector } from '../app/hooks'
import {
    useGetMovieQuery,
    useGetPostersQuery,
    useGetReviewQuery,
} from '../api/kinopoiskApi'
import { Flex, List } from 'antd'
import Header from '../Components/Header'
import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const Movie = () => {
    const { id } = useParams()
    const { data } = useGetMovieQuery(id ? id : '')
    const { data: posters } = useGetPostersQuery(id ? id : '')
    const { data: review } = useGetReviewQuery(id ? id : '')

    useLayoutEffect(() => {
        document.title = `Movie (${data?.name})`
    }, [data?.name])

    const {
        user: { login, password },
    } = useAppSelector((state) => state.movies)

    if (!login && !password) return <Navigate to={'/auth'} />

    return (
        <>
            <Header />
            <Flex gap="middle">
                <div>
                    <Link to={'/'}>👈К списку фильмов</Link>
                    <h1>{data?.name}</h1>
                    <img src={data?.poster.previewUrl} alt="Prevue" />
                    <div>
                        <p>Описание: {data?.description}</p>
                        <p>Оценки: {data?.rating.imdb}</p>
                        <p>Возрастной рейтинг: {data?.ageRating}</p>
                    </div>
                    <List
                        style={{ width: '100vh' }}
                        size="small"
                        header={<div>Отзывы пользователей</div>}
                        bordered
                        dataSource={review}
                        renderItem={(item) => (
                            <List.Item>
                                <strong>
                                    <p>Пользователь: {item?.author}</p>
                                </strong>
                                <p>Отзыв: {item?.review}</p>
                                <strong>
                                    <p>{item?.review} отзыв</p>
                                </strong>
                            </List.Item>
                        )}
                    />
                </div>
                <div>
                    <Flex>
                        <List
                            style={{ width: 300 }}
                            size="small"
                            pagination={{
                                position: 'bottom',
                                align: 'center',
                                pageSize: 3,
                            }}
                            header={<div>Постеры</div>}
                            bordered
                            dataSource={posters}
                            renderItem={(item) => (
                                <List.Item>
                                    <img
                                        style={{ width: 250 }}
                                        src={item?.previewUrl}
                                    />
                                </List.Item>
                            )}
                        />
                    </Flex>
                    <List
                        style={{ width: 300 }}
                        size="small"
                        header={<div>Количество серий в сезонах</div>}
                        bordered
                        dataSource={data?.seasonsInfo}
                        renderItem={(item) => (
                            <List.Item>
                                <p>{item.episodesCount}</p>
                                <p>{item.number}</p>
                            </List.Item>
                        )}
                    />
                </div>
                <div>
                    <List
                        style={{ width: 300 }}
                        size="small"
                        pagination={{ position: 'bottom', align: 'center' }}
                        header={<div>Список актеров</div>}
                        bordered
                        dataSource={data?.persons}
                        renderItem={(item) => (
                            <List.Item>
                                <img style={{ width: 150 }} src={item.photo} />
                                <p>{item.name}</p>
                            </List.Item>
                        )}
                    />
                </div>
            </Flex>
        </>
    )
}

export default Movie
