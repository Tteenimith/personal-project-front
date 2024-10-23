import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import {getModel,createModel,deleteModel} from '../../api/member'


const TableModel = () => {

    const [showModel,setShowModel] = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        try {
            const  reps = await getModel()
            setShowModel(reps.data)
            console.log(reps.data)
        } catch (err) {
            next(err)
        }
    }

    const hdlRemove = async (id) => {
        try {
            const resp = await deleteModel(id)
            toast.error("Delete Complete")
            getData()
        } catch (err) {
          console.log(err);
          
        }
      }
  




  return (
    <div >
  <table   className="min-w-full divide-y divide-gray-700 bg-gray-800">
    <thead className="bg-gray-900">
      <tr >
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">#</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Model Type</th>
        </tr>
    </thead>
    {showModel.map((name,idx)=>{
      return (
    <tbody className="bg-gray-800 divide-y divide-gray-700">
      <tr key={idx}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{idx+1}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-whites">{name.name}</td>



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

export default TableModel