import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from '../pages/auth/Login'
import HomePage from '../pages/user/HomePage'

const router = createBrowserRouter([
    {
        path:"/",
        element: <Login/>

    },
    {
        path:"/homepage",
        element:<HomePage/>
    }
])


const AppRoute = () => {
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}

export default AppRoute