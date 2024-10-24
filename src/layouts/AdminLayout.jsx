import React from 'react'
import {Outlet} from 'react-router-dom'
import AdminSidebar from '../components/admin-component/AdminSidebar'

const AdminLayout = () => {
  return (
    <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden overflow-y-auto '>
      <div className='w-[20%] h-full relative '>
        <AdminSidebar/>

      </div>
        <div className='w-[80%] h-full '>

        <Outlet/>
        </div>
    </div>

  )
}

export default AdminLayout