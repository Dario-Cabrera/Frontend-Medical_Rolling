import axios from "./axios";


export const getAppointmentsRequest = () => axios.get(`/gettingappointments`) //Plural

export const getAppointmentRequest = (id) => axios.get(`/getoneappointment/${id}`)//Singular

export const createRequestAppointment = (appointment, token, doctorId) => {
    // Configuración de las cabeceras de la solicitud
    const headers = {
      Authorization: token,
      doctorid: doctorId,
    };
  
    // Realizar la solicitud POST al endpoint del backend
    return axios.post(`/createappointment/`, appointment, { headers });
  };
  
export const updateAppointmentRequest = (id,appointment) => axios.put(`/updateappointments/${id}`,appointment)

export const deleteAppointmentRequest = (id) => axios.delete(`/deleteappointments/${id}`)


