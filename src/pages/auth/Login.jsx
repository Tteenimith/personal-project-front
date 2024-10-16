import React,{useState} from "react";
import useAuthStore from "../../store/auth-store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginBG from '../../pics/login-bg.jpg'

const Login = () => {

  const navigate = useNavigate()

  const [form,setForm] = useState({
    email:"admin1@gmail.com",
    password : "123456"
    
  })

  const actionLogin = useAuthStore((state)=>state.actionLogin)
  const token = useAuthStore((state)=>state.token)
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
      }
        roleRedirect(role)
  }

  const roleRedirect = (role) =>{
    if (role === "ADMIN") {
        navigate("/admin")
    }else{
        navigate("/user")
    }
  }


  return (
    <div  className="font-serif ">

      {/* background */}
      <div  className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-400 to-blue-500">
        {/*middle frame */}
        <div className="flex flex-col  w-1/3 text-center h-2/3 justify-around ">
          {/* Log in */}
          <div>
            <h1 className="text-4xl font-bold text-amber-700 ">Log in</h1>
          </div>
          {/* input log in */}
          <form className="flex flex-col gap-2 items-center  " 
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
              // onClick={hdlSubmit}
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
      </div>
    </div>
  );
};

export default Login;

// text-white bg-amber-700 w-1/3 py-2 rounded-2xl
