import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Navigate } from 'react-router'
import { useGetMoviesQuery } from '../api/kinopoiskApi'
import { Pagination, Spin } from 'antd'
import { updateQueryParams } from '../features/movies/moviesSlice'
import { Card, List } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Link } from 'react-router-dom'
import { Movie } from '../types/types'

const Main = () => {
    const {
        queryParams,
        user: { login, password },
    } = useAppSelector(({ movies }) => movies)
    const dispatch = useAppDispatch()
    const { data, isError, isFetching } = useGetMoviesQuery(queryParams)

    if (!login && !password) return <Navigate to={'/auth'} />
    if (isError) return <p>Ошибка, попробуйте позже.</p>

    return (
        <>
            {isFetching && <Spin spinning={isFetching} fullscreen />}
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={(item: Movie, index: number) => (
                    <List.Item style={{ width: 250, height: 350 }}>
                        <Link to={`/movie/${item.id}`}>
                            <Card
                                tabIndex={index}
                                hoverable
                                style={{ width: 250, height: 350 }}
                                cover={
                                    <img
                                        alt="example"
                                        src={item.backdrop.url}
                                    />
                                }
                            >
                                <Meta
                                    title={item.name}
                                    description={item.shortDescription}
                                />
                            </Card>
                        </Link>
                    </List.Item>
                )}
            />
            <Pagination
                onChange={(page, limit) =>
                    dispatch(
                        updateQueryParams({
                            ...queryParams,
                            page,
                            limit,
                        }),
                    )
                }
                pageSize={queryParams.limit}
                defaultCurrent={1}
                total={100}
            />
        </>
    )
}

export default Main
