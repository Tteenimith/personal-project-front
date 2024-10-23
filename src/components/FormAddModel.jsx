import React, { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const FormAddModel = () => {
        const [data,setData] = useState({name:""})

        const hdlChange = (e) => {
                    setData({
                    ...data,
                    [e.target.name]: e.target.value,
                });
            }
            
            const handleSubmit = async(e) => {
                e.preventDefault()
                await axios.post("http://localhost:8077/model/createModel",data)

                
                
            }
            
            return (
                <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Model
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                {/* Model */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={hdlChange}
                  className="w-full px-3 py-2 bg-slate-100 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  required
                  />
              </div>
              
                

    
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      );
    }
;

export default FormAddModel