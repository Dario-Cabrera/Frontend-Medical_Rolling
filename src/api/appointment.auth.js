import axios from "./axios";

export const getAppointmentsRequest = () => axios.get(`/gettingappointments`);

export const getAppointmentRequest = (id) => axios.get(`/getappointmentbyuser/${id}`);
export const getAppointmentRequestDoctor = (id) => axios.get(`/getappointmentbydoctor/${id}`);

export const createRequestAppointment = (appointment, token, doctorId) => {
  const headers = {
    Authorization: token,
    doctorid: doctorId,
  };

  return axios.post(`/createappointment/`, appointment, { headers });
};

export const updateAppointmentRequest = (id, appointment) => axios.put(`/updateappointments/${id}`, appointment);

export const deleteAppointmentRequest = (id) => axios.delete(`/deleteappointments/${id}`);
