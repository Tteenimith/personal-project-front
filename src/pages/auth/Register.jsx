import React, { useState } from "react";
import useAuthStore from "../../store/auth-store";
import { toast } from "react-toastify";


const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    branch: "",
  };

  const name = useAuthStore((state) => state.name);
  const actionRegister = useAuthStore((state) => state.actionRegister);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    branch: "",
  });

  const hdlChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const hdlSubmit = (e) => {
    e.preventDefault()

      if (form.password !== form.confirmPassword) {
        return alert("password not match")
      }


    actionRegister(form)
    setForm(initialState)
    toast.success("Register Success")
  }

  return (
    <div className="flex flex-row  h-screen bg-gradient-to-b from-teal-400 to-blue-500 text-white">
      {/* right */}
      <div className="w-3/5 flex flex-col justify-between p-8 ">
        {/* head register */}
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl ">Register</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            atque.
          </p>
        </div>
        {/* input register */}
      <form onSubmit={hdlSubmit}>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={hdlChange}
            className="p-2 w-3/4 rounded-lg shadow-md bg-white text-black"
            type="text"
          />
          <label htmlFor="">E-mail</label>
          <input
            name="email"
            value={form.email}
            onChange={hdlChange}
            className="p-2 w-3/4 rounded-lg shadow-md bg-white text-black"
            type="text"
          />
          <label htmlFor="">Password</label>
          <input
            name="password"
            value={form.password}
            onChange={hdlChange}
            className="p-2 w-3/4 rounded-lg shadow-md bg-white text-black"
            type="text"
          />
          <label htmlFor="">Confirm Password</label>
          <input
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={hdlChange}
            className="p-2 w-3/4 rounded-lg shadow-md bg-white text-black"
            type="text"
          />
          <label htmlFor="">Phone no.</label>
          <input
            name="phone"
            value={form.phone}
            onChange={hdlChange}
            className="p-2 w-3/4 rounded-lg shadow-md bg-white text-black"
            type="text"
          />
          <label htmlFor="">Branch</label>
          <input
            name="branch"
            value={form.branch}
            onChange={hdlChange}
            className="p-2 w-3/4 rounded-lg shadow-md bg-white text-black"
            type="text"
          />

          <button
            type="submit"
            className="cursor-pointer transition-all bg-green-500 text-white w-1/3 mt-4 px-6 py-2 rounded-lg
                    border-blue-600
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            sign up
          </button>
        </div>
      </form>
        {/* button register */}
      </div>
    </div>
  );
};

export default Register;
