import React from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthStore from '../../store/auth-store';
import { Link, NavLink } from "react-router-dom";

// react icon import
import { FaChartPie, FaUser } from "react-icons/fa";
import { HiArchive } from "react-icons/hi";
import { IoBody } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import { MdDashboard, MdManageAccounts } from "react-icons/md";

const classLink =
    "flex items-center hover:bg-gray-500 hover:scale-105 hover:duration-200 active:bg-green-400 rounded-sm px-3 py-2 gap-2";


const UserSidebar = () => {
    const navigate = useNavigate()
    const actionLogout = useAuthStore((state)=>state.actionLogout)

    const hdlLogout = ()=>{
        actionLogout()
        navigate("/")
    }
    return (
    <div className="bg-gray-200 w-[20%] p-4 h-full  flex flex-col text-black fixed">
        {/* Profile */}
      <div className="flex flex-col items-center gap-4 py-4">
        <FaUser fontSize={48} />
        <span className="text-lg ">Profile</span>
      </div>

      {/* Menu Link */}
      <div className="flex-1 py-4">
        <Link className={classLink} to={"/user"}>
          <span className="text-xl">
            <MdDashboard />
          </span>
          Delivery Status
        </Link>
        
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl flex items-center gap-1  ">
          <span className="text-xl">
                <HiArchive />
              </span>
              Product
          </div>
          <div className="collapse-content">
        <Link className={classLink} to={"/user/AllPart"}>
          <span className="text-xl">
            <HiArchive />
          </span>
          View Product
        </Link>
          </div>
        </div>


      <Link className={classLink} to={"/user/newRequest"}>
        <span className="text-xl">
          <IoIosAddCircleOutline />
        </span>
        New Request
      </Link>
        </div>
        {/* Bottom Menu */}

      <div>
        <Link className={classLink} to={"#"}>
          <span className="text-xl">
            <IoSettingsSharp />
          </span>
          Setting
        </Link>

        <Link onClick={hdlLogout} className={classLink} to={"#"}>
          <span className="text-xl">
            <IoLogOut />
          </span>
          Logout
        </Link>
      </div>

    </div>
    )
}

export default UserSidebar