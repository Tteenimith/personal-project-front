import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {getModel} from '../../api/member'
import { toast } from 'react-toastify';
import useAuthStore from '../../store/auth-store'

const FormAddProduct = () => {
    const [formData, setFormData] = useState({
        
        name: "",
        srNumber: "",
        model: ""
        
      });

      const token = useAuthStore((state)=>state.token)

      const [file,setFile] = useState(null)
    
      const [showModel,setShowModel] = useState([])

        useEffect(()=>{
          getData()
          },[])
  
  
  
          const getData = async()=>{
              try {
                  const show = await getModel()
                  console.log(show.data)
                  setShowModel(show.data)
                  
              } catch (err) {
                  console.log(err)
              }
          }

      const handleChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }else{

            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = new FormData()
        payload.append(
            "image",file
        )
        payload.append(
            "name",formData.name
        )
        payload.append(
            "srNumber",formData.srNumber
        )
        payload.append(
            "model",formData.model
        )
       await axios.post("http://localhost:8077/api/admin/part",payload,{
        headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type" : "application/x-www-form-urlencoded",
        }
       })
        toast.success("Add Success")
        console.log("Form Data:", formData);
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Add Product
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                {/* Image */}
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
              {/* Part Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Part Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-100 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
    
              {/* Serial number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Serial number
                </label>
                <input
                  type="text"
                  name="srNumber"
                  value={formData.srNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-100 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
              {/* Model type */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                Model Type
                </label>
                <select 
                name="model"
                onChange={handleChange}
                className="w-full px-3 py-2 bg-slate-100 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500">
                              
                <option value="">Pls select model</option>
                {showModel?.map((data,idx)=>{
                  return <option value={data.id}>{data.name}</option>
                })}
                

                </select>
                {/* <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-100 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  required
                /> */}
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

export default FormAddProduct