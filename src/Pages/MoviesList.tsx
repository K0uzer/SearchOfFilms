import React from 'react'
import { useAppSelector } from '../app/hooks'
import { Navigate, useNavigate } from 'react-router'
import { useGetMoviesByNameQuery } from '../api/kinopoiskApi'
import { Card, Pagination } from 'antd'
import Header from '../Components/Header'
import Meta from 'antd/es/card/Meta'

const MoviesList = () => {
    console.log(useGetMoviesByNameQuery('int').data)
    const navigate = useNavigate()
    const { login, password } = useAppSelector((state) => state.movies.user)

    if (!login && !password) return <Navigate to={'/auth'} />

    const handlePath = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        evt.preventDefault()
        return navigate('/movie')
    }

    return (
        <>
            <Header />
            <section>
                <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <li
                        onClick={(evt) => handlePath(evt)}
                        style={{ margin: 10 }}
                    >
                        <Card
                            hoverable
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </li>
                    <li
                        onClick={(evt) => handlePath(evt)}
                        style={{ margin: 10 }}
                    >
                        <Card
                            hoverable
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </li>
                    <li
                        onClick={(evt) => handlePath(evt)}
                        style={{ margin: 10 }}
                    >
                        <Card
                            hoverable
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </li>
                    <li
                        onClick={(evt) => handlePath(evt)}
                        style={{ margin: 10 }}
                    >
                        <Card
                            hoverable
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </li>
                    <li
                        onClick={(evt) => handlePath(evt)}
                        style={{ margin: 10 }}
                    >
                        <Card
                            hoverable
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </li>
                    <li
                        onClick={(evt) => handlePath(evt)}
                        style={{ margin: 10 }}
                    >
                        <Card
                            hoverable
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </li>
                    <li
                        onClick={(evt) => handlePath(evt)}
                        style={{ margin: 10 }}
                    >
                        <Card
                            hoverable
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </li>
                    <li
                        onClick={(evt) => handlePath(evt)}
                        style={{ margin: 10 }}
                    >
                        <Card
                            hoverable
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </li>
                    <li
                        onClick={(evt) => handlePath(evt)}
                        style={{ margin: 10 }}
                    >
                        <Card
                            hoverable
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </li>
                    <li
                        onClick={(evt) => handlePath(evt)}
                        style={{ margin: 10 }}
                    >
                        <Card
                            hoverable
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </li>
                    <li
                        onClick={(evt) => handlePath(evt)}
                        style={{ margin: 10 }}
                    >
                        <Card
                            hoverable
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </li>
                </ul>
                <Pagination defaultCurrent={1} total={50} />
            </section>
        </>
    )
}

export default MoviesList
