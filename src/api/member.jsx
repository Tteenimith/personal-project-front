import axios from "axios";

export const listMember = () => axios.get("http://localhost:8077/api/admin/member");

export const updateMember = (token,id,form) =>{
    return axios.patch("http://localhost:8077/api/admin/member/" + id,form,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
}

export const removeMember = (token,id) =>{
    return axios.delete("http://localhost:8077/api/admin/member/"+id,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
}


// Part api
export const createPart = (id,form) =>{
    return axios.post("http://localhost:8077/api/admin/part/"+ form,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
}

export const getPart = () => axios.get("http://localhost:8077/api/admin/part")


export const updatePart = (id,form,token) => {
    return axios.patch("http://localhost:8077/api/admin/part/"+id,form,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
}
export const deletePart = (id,token) => {
    return axios.delete("http://localhost:8077/api/admin/part/"+id,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
}

// model api 

export const getModel = () => axios.get("http://localhost:8077/model/getModel")

export const createModel = (form)=>{
    return axios.post("http://localhost:8077/model/createModel"+form)
}

export const deleteModel = (id) =>{
    return axios.delete("http://localhost:8077/model/deleteModel/"+id)
}

export const showRequest = ()=>{
    return axios.get("http://localhost:8077/api/request/")
}

export const newRequest = (form,token)=>{
    return axios.post("http://localhost:8077/api/request/",form,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
}

export const updateRequest = (id,form)=>{
    return axios.patch("http://localhost:8077/api/request/"+id,form)
}

export const deleteRequest = (id)=>{
    return axios.delete("http://localhost:8077/api/request/"+id)
}