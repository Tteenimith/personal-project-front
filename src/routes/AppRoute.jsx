import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from '../pages/auth/Login'
import HomePage from '../pages/user/HomePage'
import Register from '../pages/auth/Register'
import PageNotFound from '../pages/PageNotFound'
import Home from '../pages/Home'
import AdminLayout from '../layouts/AdminLayout'
import Manage from '../pages/admin/Manage'

const router = createBrowserRouter([
    {
        path:"/",
        element: <Login/>,
        children:[
          {path:"*",element:<PageNotFound/>}
        ]

    },
    {path:"/user",
      element:<HomePage/>
    },

    {path:"/admin",
      element:<AdminLayout/>,

      children:[
        {index:true , element:<Home/>},
        {path:"register" , element:<Register/>},
        {path:"manage" , element:<Manage/>}
      ]
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