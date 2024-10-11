import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from '../pages/auth/Login'
import HomePage from '../pages/user/HomePage'
import Register from '../pages/auth/Register'
import PageNotFound from '../pages/PageNotFound'

const router = createBrowserRouter([
    {
        path:"/",
        element: <Login/>,
        children:[
          {index:true,element:<Login/>},
          {part:"*",element:<PageNotFound/>}
        ]

    },
    {path:"/home", element:<HomePage/>},
    {path:"/register" , element:<Register/>},
    {path:"/login" , element:<Login/>},

])


const AppRoute = () => {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default AppRoute