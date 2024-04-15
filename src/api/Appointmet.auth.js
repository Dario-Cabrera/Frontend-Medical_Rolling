import axios from "./axios";




export const registerRequestAppointment = (appointment) => axios.post(`/createappointment/`, appointment)


