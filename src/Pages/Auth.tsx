import { FormEvent, useState } from 'react'
import { updateUser } from '../features/movies/moviesSlice'
import { useAppDispatch } from '../app/hooks'
import { useNavigate } from 'react-router'

const Auth = () =>
{
    const [user, setUser] = useState({ login: '', password: ''})
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        dispatch(updateUser(user))
        navigate('/')
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={user.login} onChange={(evt) => setUser({ ...user, login:evt.target.value})} />
            <input type="text" value={user.password} onChange={(evt) => setUser({ ...user, password:evt.target.value})} />
            <button>OK</button>
        </form>
    </>
}

export default Auth
