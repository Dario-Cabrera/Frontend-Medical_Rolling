import { createContext, useContext, useState } from "react";
import {
  createRequestAppointment,
  getAppointmentsRequest,
} from "../api/Appointmet.auth";

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

  const createAppointment = async (appointment) => {
    console.log(appointment);
    const res = await createRequestAppointment(appointment);
    console.log(res);
  };

  const getAppointments = async () => {
    try {
      const res = await getAppointmentsRequest();
      console.log("Soy lo ahora estas haciendo",res)
      setAppointments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppointmentContext.Provider
      value={{ appointments, createAppointment, getAppointments }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
