import React, { useEffect, useState } from 'react'
import {getPart,updatePart,deletePart} from '../../api/member'
import useAuthStore from '../../store/auth-store'
import {toast} from 'react-toastify'

const AllProduct = () => {
    const [getAllpart,setGetAllPart] = useState([])

    useEffect(()=>{
      getData()
    },[])

    const getData = async()=>{
      try {
          const reps = await getPart()
          setGetAllPart(reps.data)
          console.log(reps.data);
          
      } catch (error) {
        console.log(error)
      }
    }

    const hdlRemove = async (id) => {
      try {
          const resp = await deletePart(id)
          toast.error("Delete Complete")
          getData()
      } catch (err) {
        console.log(err);
        
      }
    }

    const hdlUpdate = async (e,id) =>{
      const parts = e.target.value
      const body = {
        [e.target.name]: e.target.value
      }
      try {
          const reps = await updatePart(id,body)
          toast.success(reps.data)
          getData()
      } catch (err) {
        console.log(err)
      }
    }


  return (
    

    <div >
  <table   className="min-w-full divide-y divide-gray-700 bg-gray-800">
    <thead className="bg-gray-900">
      <tr >
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">#</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Image</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Part Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Serial number</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Model Type</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    {getAllpart.map((name,idx)=>{
      return (
    <tbody className="bg-gray-800 divide-y divide-gray-700">
      <tr key={idx}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{idx+1}</td>
        <td className="border w-[200px] h-[60px] "><img src={name.image} alt="" /></td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-whites">{name.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-whites">{name.sr_number}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-whites">
          {/* {name.modelId} */}
          <select
            name='model'
            onChange={(e)=>hdlUpdate(e,name.id)}
            defaultValue={name.modelId}
            className='block w-full px-3 py-2 border border-gray-800 bg-gray-800 text-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm'
          >
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          
          </td>


        <td className="  px-4 py-2 text-blue-500">

                  <button
                    onClick={() => hdlRemove(name.id)}
                    className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-800"
                  >
                    Delete
                  </button>
        </td>
      </tr>
      
    </tbody>


      )

    })}
  </table>
</div>

  )
}

export default AllProduct