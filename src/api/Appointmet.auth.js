import axios from "axios";

const API ="http://localhost:3001/api"



export const registerRequestAppointment = (appointment) => axios.post(`${API}/createappointment/`, appointment)


