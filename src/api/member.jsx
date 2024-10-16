import axios from "axios";

export const listMember = () => axios.get("http://localhost:8077/api/member");

export const updateMember = (token,id,form) =>{
    return axios.patch("http://localhost:8077/api/member/" + id,form)
}

export const removeMember = (token,id) =>{
    return axios.delete("http://localhost:8077/api/member/"+id)
}


// Part api
export const createPart = (id,form) =>{
    return axios.post("http://localhost:8077/api/part/"+ form)
}

export const getPart = () => axios.get("http://localhost:8077/api/part")


export const updatePart = (id,form) => {
    return axios.patch("http://localhost:8077/api/part/"+id,form)
}
export const deletePart = (id,form) => {
    return axios.delete("http://localhost:8077/api/part/"+id)
}