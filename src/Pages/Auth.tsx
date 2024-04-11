import { FormEvent, useState } from 'react'
import { updateUser } from '../features/movies/moviesSlice'
import { useAppDispatch } from '../app/hooks'
import { useNavigate } from 'react-router'
import { Button, Form, FormProps, Input } from 'antd'

const Auth = () => {
    const [user, setUser] = useState({ login: 'user', password: 'user' })
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        console.log(user)
        evt.preventDefault()
        dispatch(updateUser(user))
        return navigate('/')
    }

    type FieldType = {
        username?: string
        password?: string
        remember?: string
    }

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values)
    }

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
        errorInfo,
    ) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
                    onChange={(evt) =>
                        setUser({ ...user, login: evt.target.value })
                    }
                />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <Input.Password
                    value={user.password}
                    onChange={(evt) =>
                        setUser({ ...user, password: evt.target.value })
                    }
                />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button onClick={handleSubmit} type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Auth
