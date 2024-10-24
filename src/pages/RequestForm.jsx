import React,{useState,useEffect} from "react";
import {getModel,newRequest} from '../api/member'
import useAuthStore from "../store/auth-store";
import { toast } from "react-toastify";




const RequestForm = () => {
  const [formData, setFormData] = useState({
    serialNumber: "",
    location: "",
    requestDate: "",
    delivery: "",
    
  });
  console.log(formData)

  const [showModel,setShowModel] = useState(null)
  const [modelSelect,setModelSelect] = useState(0)
  const token = useAuthStore((state)=>state.token)
  console.log(token)
  useEffect(()=>{
    getData()
},[])

const getData = async()=>{
    try {
        const  reps = await getModel()
        setShowModel(reps.data)
        // console.log(reps.data)
    } catch (err) {
        console.log(err)
    }
}

const hdlOnclick = (e) =>{
  setModelSelect(e.target.value)
  console.log( showModel[e.target.value]?.parts)
}


  const handleChange = (e) => {
    console.log(e.target.name)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData)

    const reps = await newRequest(formData,token)
    toast.success("Request Done")
    console.log(reps)
  };



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Inventory Request Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model Type
            </label>
            <select onChange={hdlOnclick}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500" >
              {showModel && showModel.map((item,idx)=>{
                return <option key={idx} value={idx}>{item.name} </option>
              })}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            Serial number
            </label>
            <select  
            name="serialNumber" 
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            value={formData.serialNumber}
            defaultValue={""}
            >
              
              <option value={""}   > Select </option>
              {showModel && showModel[modelSelect].parts.map((item,idx)=>{
                return <option key={idx} value={item.id}>{item.sr_number} </option>
              })}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />
          </div>

          {/* Request Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Request Date
            </label>
            <input
              type="date"
              name="requestDate"
              value={formData.requestDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              required
            />
          </div>

          {/* Delivery */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Delivery 
            </label>
            <select
              name="delivery"
              value={formData.Delivery}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              required
            >
              <option value="">Delivery by </option>
              <option value="CAR">CAR</option>
              <option value="BIKE">BIKE</option>
              <option value="LINE HAUL">LINE HAUL</option>
            </select>
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
};

export default RequestForm;
