import React, { useState,useEffect } from 'react'
import {getPart} from '../../api/member'


const UserProduct = () => {
    const [showPart,setShowPart] = useState([])

    useEffect(()=>{
        getData()
        },[])



        const getData = async()=>{
            try {
                const show = await getPart()
                console.log(show.data)
                setShowPart(show.data.parts)
                
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
    {showPart.map((name,idx)=>{
      console.log(name)
      return (
    <tbody className="bg-gray-800 divide-y divide-gray-700">
      <tr key={idx}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{idx+1}</td>
        <td className="border w-[200px] h-[60px] "><img src={name.image} alt="" /></td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-whites">{name.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-whites">{name.sr_number}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-whites">{name.model.name} 
        </td>
      </tr>
      
    </tbody>


      )

    })}
  </table>
</div>
  )
}

export default UserProduct