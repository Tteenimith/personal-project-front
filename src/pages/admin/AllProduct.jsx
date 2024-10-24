import React, { useEffect, useState } from 'react'
import {getPart,updatePart,deletePart,getModel} from '../../api/member'
import useAuthStore from '../../store/auth-store'
import {toast} from 'react-toastify'

const AllProduct = () => {
    const [getAllpart,setGetAllPart] = useState([])
    const [models, setModels] = useState([])
    
    const token = useAuthStore((state)=>state.token)
    

    useEffect(()=>{
      getData()
      getModels()
    },[])

    const getData = async()=>{
      try {
          const reps = await getPart()
          setGetAllPart(reps.data.parts)
          
      } catch (error) {
        console.log(error)
      }
    }

    const getModels = async()=>{
      try {
        const reps = await getModel()
        setModels(reps.data)
        console.log(reps.data)
        
      } catch (error) {
        console.log(error)
      }
    }


    const hdlRemove = async (id) => {
      try {
          const resp = await deletePart(id,token)
          toast.error("Delete Complete")
          getData()
      } catch (err) {
        console.log(err);
        
      }
    }

    const hdlUpdate = async (e,id) =>{
      const parts = e.target.value
      const body = {
        [e.target.name]: +e.target.value
      }
      try {
          const reps = await updatePart(id,body,token)
          toast.success(reps.data)
          getModels()
      } catch (err) {
        console.log(err)
      }
    }


  return (
    

    <div className=" overflow-x-auto">
  <table className="min-w-full table-fixed divide-y divide-gray-700 bg-gray-800">
    <thead className="bg-gray-900">
      <tr>
        <th className="w-12 px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">#</th>
        <th className="w-48 px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Image</th>
        <th className="w-40 px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Part Name</th>
        <th className="w-40 px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Serial number</th>
        <th className="w-40 px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Model Type</th>
        <th className="w-28 px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
      </tr>
    </thead>
    <tbody className="bg-gray-800 divide-y divide-gray-700 overflow-y-auto">
      {getAllpart && getAllpart.map((name, idx) => (
        <tr key={idx}>
          <td className="px-6 py-4 text-sm font-medium text-white">{idx + 1}</td>
          <td className="px-6 py-4"><img src={name.image} alt="" className="w-[150px] h-[80px] object-cover" /></td>
          <td className="px-6 py-4 text-sm font-medium text-white">{name.name}</td>
          <td className="px-6 py-4 text-sm font-medium text-white">{name.sr_number}</td>
          <td className="px-6 py-4 text-sm font-medium text-white">
            <select
              name="modelId"
              className="block w-full px-3 py-2 border border-gray-800 bg-gray-800 text-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              onChange={(e) => hdlUpdate(e, name.id)}
              defaultValue={name.model.id}
            >
              {models.map((data, idx) => (
                <option key={idx} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </td>
          <td className="px-4 py-2 text-blue-500">
            <button
              onClick={() => hdlRemove(name.id)}
              className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-800"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


  )
}

export default AllProduct