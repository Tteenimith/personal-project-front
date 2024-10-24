import React,{useState} from "react";
import useAuthStore from "../../store/auth-store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginBG from '../../pics/login-bg.jpg'

const Login = () => {

  const navigate = useNavigate()

  const [form,setForm] = useState({
    email:"",
    password : ""
    
  })

  const actionLogin = useAuthStore((state)=>state.actionLogin)
  const token = useAuthStore((state)=>state.token)
  const user = useAuthStore((state)=>state.user)
  //handle function
  const hdlOnChange = (e) =>{
    setForm(form=>({
      ...form,
      [e.target.name]:e.target.value
    }))
  }
  const hdlSubmit = async(e)=>{
    e.preventDefault()
      
      const role = await actionLogin(form)
      if (role) {
        roleRedirect(role)
        toast.success(`Welcome`)
      }else{
        
        roleRedirect(role)
        toast.error("Pls insert form")  
      }
  }


  const roleRedirect = (role) =>{
    if (role === "ADMIN") {
        navigate("/admin")
    }else{
        navigate("/user")
    }
  }


  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-[url(./src/pics/login-bg.jpg)] bg-opacity-10 ">
  <div className="bg-white bg-opacity-70 rounded-lg p-8 w-96 shadow-lg backdrop-blur-sm">
    {/* Title */}
    <div className="text-center mb-6">
      <h3 className="text-2xl text-amber-600 ">INVENTORY MANAGEMENT SYSTEM</h3>
    </div>

    {/* Form */}
    <form className="space-y-4">
      {/* Username */}
      <div>
        <label className="block text-left text-amber-600 font-semibold mb-1">USERNAME</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={hdlOnChange}
          className="w-full p-2 bg-transparent border-b-2 border-white focus:outline-none focus:border-pink-600 font-semibold text-black placeholder-gray-200"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-left text-amber-600 font-semibold mb-1">PASSWORD</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={hdlOnChange}
          className="w-full p-2 bg-transparent border-b-2 border-white focus:outline-none focus:border-pink-600 font-semibold text-black placeholder-gray-200"
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        onClick={hdlSubmit}
        className="w-full bg-green-500 hover:bg-green-800 text-white py-2 rounded-full mt-6 transition duration-300 "
      >
        login
      </button>
    </form>
  </div>
</div>
  );
};

export default Login;



{/* <div  className="font-serif " */}
    // style={{
    //   backgroundImage: {loginBG},
    //   backgroundSize: "cover", // or "contain", depending on your preference
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat"
    // }}>

      {/* background */}
      // <div  className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-400 to-blue-500">
        
        {/*middle frame */}
        // <div className="flex flex-col  w-1/3 text-center h-2/3 justify-around ">
          {/* Log in */}
          // <div>
          //   <h1 className="text-4xl font-bold text-amber-700 ">Warehouse Inventory Management</h1>
          // </div>
          {/* input log in */}
          {/* <form className="flex flex-col gap-2 items-center  " 
          onSubmit={hdlSubmit}
          >
            <input
              value={form.email}
              onChange={hdlOnChange}
              name="email"
              type="text"
              placeholder="Email"
              className="p-2 w-3/4 rounded-lg shadow-md bg-white"
            />
            <input
              value={form.password}
              onChange={hdlOnChange}
              name="password"
              type="text"
              placeholder="password"
              className="p-2 w-3/4 rounded-lg shadow-md bg-white"
            />
            <div className=" ml-[160px] text-amber-700 ">Forgot password?</div>
            <button
              onClick={hdlSubmit}
              type="submit"
              className="cursor-pointer transition-all bg-amber-700 text-white w-1/3 px-6 py-2 rounded-lg
                        border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              Log in
            </button>
          </form>
          <div>
          </div>
        </div>
      </div> */}
    // </div>

