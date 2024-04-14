import React from 'react'
import { updateUser } from '../features/movies/moviesSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { useNavigate } from 'react-router'
import { Button, Form, Input } from 'antd'

const AuthForm = () => {
    const { user } = useAppSelector(({ movies }) => movies)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = () => {
        dispatch(updateUser(user))
        navigate('/')
    }

    type FieldType = {
        username?: string
        password?: string
        remember?: string
    }
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[
                    { required: true, message: 'Please input your login!' },
                ]}
            >
                <Input
                    value={user.login}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch(
                            updateUser({
                                ...user,
                                login: evt.target.value,
                            }),
                        )
                    }
                />
            </Form.Item>
            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password
                    value={user.password}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch(
                            updateUser({
                                ...user,
                                password: evt.target.value,
                            }),
                        )
                    }
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AuthForm
