import React from 'react'
import {Outlet} from 'react-router-dom'
import UserSidebar from '../components/user-component/UserSidebar'

const UserLayout = () => {
    return (
        <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden overflow-y-auto'>
            <div className='w-[20%] h-full relative '>
            <UserSidebar/>
    
            </div>
            <div className='w-[80%] h-full '>
    
            <Outlet/>
            </div>
        </div>
    
        )
}

export default UserLayout