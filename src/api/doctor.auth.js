import axios from "axios";

const API ="http://localhost:3001/api"



export const registerRequestDoctor = (doctor) => axios.post(`${API}/createdoctor/`, doctor)

export const loginRequestDoctor = (doctor) => axios.post(`${API}/logindoctor`, doctor)

