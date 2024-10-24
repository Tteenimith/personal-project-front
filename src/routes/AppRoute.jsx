import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from '../pages/auth/Login'
import HomePage from '../pages/user/HomePage'
import Register from '../pages/auth/Register'
import PageNotFound from '../pages/PageNotFound'
import Home from '../pages/Home'
import AdminLayout from '../layouts/AdminLayout'
import Manage from '../pages/admin/Manage'
import AllProduct from '../pages/admin/AllProduct'
import RequestForm from '../pages/RequestForm'
import AddProduct from '../pages/admin/addProduct'
import AddModel from '../pages/admin/AddModel'
import UserLayout from '../layouts/UserLayout'
import TableModel from '../pages/admin/TableModel'
import UserProduct from '../pages/user/userProduct'
import HomeAdmin from '../pages/admin/HomeAdmin'
import ProtectRoute from './ProtectRoute'
import Unathorization from '../pages/Unathorization'

const router = createBrowserRouter([
    {
        path:"/",
        element: <Login/>,
        children:[
          {path:"*",element:<PageNotFound/>}
        ]

    },
    {path:"/user",
      element:<ProtectRoute element={<UserLayout/>} allow={["USER","ADMIN"]}/>,

      children:[
        {index:true , element:<Home/>},
        {path:"AllPart" ,element:<UserProduct/>},
        {path:"newRequest" ,element:<RequestForm/>},
        {path:"unauthorization",element:<Unathorization/>},
        {path:"*",element:<PageNotFound/>}
      ]

    },

    {path:"/admin",
      element:<ProtectRoute element={<AdminLayout/>} allow={["ADMIN"]}/>,
      
      children:[
        {index:true , element:<HomeAdmin/>},
        {path:"register" , element:<Register/>},
        {path:"manage" , element:<Manage/>},
        {path:"AllProduct" , element:<AllProduct/>},
        {path:"AddProduct",element:<AddProduct/>},
        {path:"getModel",element:<TableModel/>},
        {path:"AddModel",element:<AddModel/>}
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