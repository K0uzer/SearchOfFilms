import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Auth from './Pages/Auth'
import MoviesList from './Pages/MoviesList'
import Movie from './Pages/Movie'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <Auth />,
    },
    {
        path: '/',
        element: <MoviesList />,
    },
    {
        path: '/movie',
        element: <Movie />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
)

reportWebVitals()
