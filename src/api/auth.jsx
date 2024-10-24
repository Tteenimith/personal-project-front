import axios from 'axios'

export const login = (form) =>
        axios.post("http://localhost:8077/api/login",form)

export const register = (form) =>
        axios.post("http://localhost:8077/api/admin/register",form)

export const currentUser = (token) => {
        return axios.post(
        "http://localhost:8077/api/current-user",
        {},
        {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
        );
    };
    