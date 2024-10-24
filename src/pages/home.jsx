import React, { useEffect, useState } from 'react'
import {showRequest} from '../api/member'

const home = () => {
  const [getReq,setGetReq] = useState([])

useEffect(()=>{
  getRequest()
},[])


  const getRequest = async()=>{
    try {
        const reps = await showRequest()
        setGetReq(reps.data)
        // console.log(reps.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
<div className="overflow-x-auto">
  <table className="min-w-full table-fixed divide-y divide-gray-700 bg-gray-800 text-center">
    {/* head */}
    <thead>
      <tr>
        
        <th>ชื่อผู้เบิก</th>
        <th>สถานที่จัดส่ง</th>
        <th>จัดส่งโดย</th>
        <th>วันที่</th>
        <th>สถานะ</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {getReq.map((data,index)=>{
        // console.log(data.user.name)
        return <tr key={index}>
          <td>{data.user.name}</td>
          <td>{data.location}</td>
          <td>{data.delivery}</td>
          <td>{data.date.slice(0,-14)}</td>
          <td>{data.status}</td>
        </tr>
        
      })}

    </tbody>
  </table>
</div>
  )
}

export default home