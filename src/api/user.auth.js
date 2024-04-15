import axios from "axios";

const API ="http://localhost:3001/api"

export const registerRequestUser = (user) => axios.post(`${API}/createuser/`, user)

export const loginRequestUser = (user) => axios.post(`${API}/loginuser`, user)


