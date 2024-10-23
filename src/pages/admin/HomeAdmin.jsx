import React,{useState,useEffect} from 'react'
import {showRequest,updateRequest,deleteRequest} from '../../api/member'
import { toast } from 'react-toastify'

const HomeAdmin = () => {
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
    
    
      const hdlUpdate = async(e,id)=>{
        const req = e.target.value
        const body = {
          [e.target.name]: e.target.value
        }
        try {
            const rs = await updateRequest(id,body)
            toast.success(rs.data)
            getRequest()
        } catch (error) {
            console.log(error)
        }
        }

        const hdlRemove = async (id)=>{
            try {
                const reps = await deleteRequest(id)
                toast.error("Delete Success") 
                getRequest()
            } catch (error) {
                console.log(error)
            }
        }
    
    
      return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
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
            return <tr>
              <td>{data.user.name}</td>
              <td>{data.location}</td>
              <td>{data.delivery}</td>
              <td>{data.date.slice(0,-14)}</td>
                <td>
                {/* {data.status} */}
                <select
                 name='status'
                 defaultValue={data.status}
                 onChange={(e)=>hdlUpdate(e,data.id)}
                 className=''
                 >
                <option value="PENDING">PENDING</option>
                <option value="ACCEPT">ACCEPT</option>
                <option value="COMPLETE">COMPLETE</option>
                </select>
                </td>
                <td>
                <button
                    onClick={() => hdlRemove(data.id)}
                    className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-800"
                  >
                    Delete
                  </button>
                </td>
            </tr>
            
          })}
    
        </tbody>
      </table>
    </div>
      )
    }

export default HomeAdmin