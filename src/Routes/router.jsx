import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home'
import CategoryNews from '../pages/CategoryNews'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AuthLayout from '../layouts/AuthLayout'
import NewsDetails from '../pages/NewsDetails'
import PrivateRoute from '../provider/PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/categories/:id',
        loader: () => fetch('/public/news.json'),
        hydrateFallbackElement: (
          <div className='flex justify-center min-h-screen items-center'>
            <span className='loading loading-spinner text-error'></span>
          </div>
        ),
        element: <CategoryNews></CategoryNews>
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/newsDetails/:id',
    loader: () => fetch('../../public/news.json'),
    hydrateFallbackElement: (
      <div className='flex justify-center min-h-screen items-center'>
        <span className='loading loading-spinner text-error'></span>
      </div>
    ),
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    )
  }
])
