import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChartPie, FaUser } from "react-icons/fa";
import { HiArchive } from "react-icons/hi";
import { IoBody } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import useAuthStore from "../../store/auth-store";
import { useNavigate } from "react-router-dom";

const classLink =
  "flex items-center hover:bg-gray-500 hover:scale-105 hover:duration-200 active:bg-green-400 rounded-sm px-3 py-2 gap-2";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const actionLogout = useAuthStore((state) => state.actionLogout);

  const hdlLogout = () => {
    actionLogout();
    navigate("/");
  };

  return (
    <div className="bg-gray-200 w-full p-4 h-full  flex flex-col text-black">
      {/* Profile */}
      <div className="flex flex-col items-center gap-4 py-4">
        <FaUser fontSize={48} />
        <span className="text-lg ">Profile</span>
      </div>

      {/* Menu Link */}
      <div className="flex-1 py-4">
        <Link className={classLink} to={"/admin"}>
          <span className="text-xl">
            <MdDashboard />
          </span>
          Delivery Status
        </Link>

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl flex items-center gap-1  ">
          <span className="text-xl">
                <IoBody />
              </span>
            User
          </div>
          <div className="collapse-content">
            <Link className={classLink} to="/admin/manage">
              <span className="text-xl">
                <MdManageAccounts />
              </span>
              Manage User
            </Link>
            <Link className={classLink} to={"/admin/register"}>
              <span className="text-xl">
                <IoBody />
              </span>
              Add User
            </Link>
          </div>
        </div>

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl flex items-center gap-1  ">
          <span className="text-xl">
                <HiArchive />
              </span>
              Product
          </div>
          <div className="collapse-content">
        <Link className={classLink} to={"/admin/AllProduct"}>
          <span className="text-xl">
            <HiArchive />
          </span>
          View Product
        </Link>

        <Link className={classLink} to={"/admin/AddProduct"}>
          <span className="text-xl">
            <HiArchive />
          </span>
          Add Product
        </Link>

        <Link className={classLink} to={"/admin/AddModel"}>
          <span className="text-xl">
            <HiArchive />
          </span>
          Add Model
        </Link>

          </div>
        </div>

        
        
        
        


        
        

      {/* endline */}
      </div>


      {/* Bottom Menu */}

      <Link className={classLink} to={"/admin/newRequest"}>
        <span className="text-xl">
          <IoIosAddCircleOutline />
        </span>
        New Request
      </Link>
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
  );
};

export default AdminSidebar;
