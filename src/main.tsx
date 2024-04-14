import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Auth from './Pages/Auth'
import App from './Pages/App'
import Movie from './Pages/Movie'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import AppLayout from './Pages/AppLayout'

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <Auth />,
    },
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/', index: true, element: <App /> },
            { path: `/movie/:id`, element: <Movie /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
)

reportWebVitals()
