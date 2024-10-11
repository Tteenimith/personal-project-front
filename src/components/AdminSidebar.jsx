import React from 'react'
import {FaChartPie,FaUser} from 'react-icons/fa'
import {IoSettingsSharp,IoLogOut} from 'react-icons/io5'
import {MdDashboard,MdManageAccounts} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const classLink =
    "flex items-center hover:bg-neutral-700 hover:scale-105 hover:duration-200 active:bg-green-400 rounded-sm px-3 py-2 gap-2";

const AdminSidebar = () => {
    const navigate = useNavigate(
    
    )
  return (
    <div className='bg-gray-300 w-60 p-4 flex flex-col text-black'>
        <div>
            <img src="http://picsum.photos/200" alt="" />
        </div>

    </div>
  )
}

export default AdminSidebar