import { Input, Select } from 'antd'
import '../index.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { updateQueryParams } from '../features/movies/moviesSlice'

const Header = () => {
    const { queryParams } = useAppSelector(({ movies }) => movies)

    const dispatch = useAppDispatch()

    return (
        <header>
            <h1>Мой любимый фильм!🤩</h1>
            <Input
                placeholder="Поиск"
                onChange={(evt) =>
                    dispatch(
                        updateQueryParams({
                            ...queryParams,
                            query: evt.target.value,
                        }),
                    )
                }
            />
            <Select
                defaultValue=""
                style={{ width: 120 }}
                allowClear
                options={[{ value: 1998, label: 1998 }]}
                onChange={(value) =>
                    dispatch(updateQueryParams({ ...queryParams, year: value }))
                }
            />
            <Select
                defaultValue=""
                style={{ width: 120 }}
                allowClear
                options={[{ value: 18, label: '+18' }]}
                onChange={(value) =>
                    dispatch(updateQueryParams({ ...queryParams, rate: value }))
                }
            />
        </header>
    )
}

export default Header
