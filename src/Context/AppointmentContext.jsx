import { createContext, useContext, useState } from "react";
import { getAppointmentsRequest, deleteAppointmentRequest, getAppointmentRequest, updateAppointmentRequest, getAppointmentRequestDoctor } from "../api/appointment.auth.js";

const AppointmentContext = createContext();

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppointment must be used within a AppointmentProvider");
  }

  return context;
};

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const res = await getAppointmentsRequest();
      setAppointments(res.data);
    } catch (error) {}
  };
  const getAppointment = async (id) => {
    try {
      const res = await getAppointmentRequest(id);
      setAppointments(res.data);
    } catch (error) {}
  };
  const getAppointmentDoctor = async (id) => {
    try {
      const res = await getAppointmentRequestDoctor(id);
      setAppointments(res.data);
    } catch (error) {}
  };

  const deleteAppointment = async (id) => {
    try {
      const res = await deleteAppointmentRequest(id);
      if (res.status === 200) setAppointments(appointments.filter((appointment) => appointment._id !== id));
    } catch (error) {}
  };

  const updateAppointment = async (id, appointment) => {
    try {
      const res = await updateAppointmentRequest(id, appointment);
      if (res.status === 200) {
        setAppointments((prevAppointments) => prevAppointments.map((prevAppointment) => (prevAppointment._id === id ? appointment : prevAppointment)));
      }
    } catch (error) {}
  };
  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        updateAppointment,
        getAppointments,
        deleteAppointment,
        getAppointment,
        getAppointmentDoctor,
      }}>
      {children}
    </AppointmentContext.Provider>
  );
};
