import axios from "./axios";


export const getAppointmentsRequest = () => axios.get(`/gettingappointments`) //Plural

export const getAppointmentRequest = (id) => axios.get(`/getoneappointment/${id}`)//Singular

export const createRequestAppointment = (appointment) => axios.post(`/createappointment/`, appointment)

export const updateAppointmentRequest = (appointment) => axios.put(`/updateappointments/${appointment.id}`,appointment)

export const deleteAppointmentRequest = (id) => axios.delete(`/deleteappointments/${id}`)


