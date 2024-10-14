import React from 'react'
import {Outlet} from 'react-router-dom'
import AdminSidebar from '../components/admin-component/AdminSidebar'

const AdminLayout = () => {
  return (
    <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden'>
      <div className='w-[25%] h-full bg-red-400'>
        <AdminSidebar/>

      </div>
        <div className='w-[75%] h-full'>

        <Outlet/>
        </div>
    </div>

  )
}

export default AdminLayout