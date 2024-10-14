import axios from "axios";

export const listMember = () => axios.get("http://localhost:8077/api/member");