import React from 'react'
import {Outlet} from 'react-router-dom'
import UserSidebar from '../components/user-component/UserSidebar'

const UserLayout = () => {
    return (
        <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden'>
            <div className='w-[25%] h-full bg-red-400'>
            <UserSidebar/>
    
            </div>
            <div className='w-[75%] h-full'>
    
            <Outlet/>
            </div>
        </div>
    
        )
}

export default UserLayout