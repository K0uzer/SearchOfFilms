import { FormEvent, useState } from 'react'
import { updateUser } from '../features/movies/moviesSlice'
import { useAppDispatch } from '../app/hooks'
import { useNavigate } from 'react-router'
import { Button, TextField } from '@mui/material'
import SimpleContainer from '../UI/SimpleContainer'

const Auth = () => {
    const [user, setUser] = useState({ login: 'user', password: 'user' })
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        console.log(user)
        evt.preventDefault()
        dispatch(updateUser(user))
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <SimpleContainer>
                <h1>Авторизация👀</h1>
                <TextField
                    type="text"
                    label="Ваш логин"
                    value={user.login}
                    onChange={(evt) =>
                        setUser({ ...user, login: evt.target.value })
                    }
                />
                <TextField
                    type="password"
                    label="Пароль"
                    value={user.password}
                    onChange={(evt) =>
                        setUser({ ...user, password: evt.target.value })
                    }
                />
                <Button
                    type="submit"
                    style={{ margin: '10px' }}
                    variant="contained"
                >
                    Войти
                </Button>
            </SimpleContainer>
        </form>
    )
}

export default Auth
