import { createContext, useContext, useState } from "react";
import {
  getAppointmentsRequest,
  deleteAppointmentRequest,
  getAppointmentRequest,
  updateAppointmentRequest,
} from "../api/appointment.auth.js";

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
/*       console.log("Soy lo ahora estas haciendo", res);
 */      setAppointments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      const res = await deleteAppointmentRequest(id);
      console.log(res.data);
      if (res.status === 200)
        setAppointments(
          appointments.filter((appointment) => appointment._id !== id)
        );
    } catch (error) {
      console.log(error);
    }
  };

  const getAppointment = async (id) => {
    try {
      const res = await getAppointmentRequest(id);
/*       console.log(res);
 */    } catch (error) {
      console.log(error);
    }
  };

  const updateAppointment = async (id, appointment) => {
    try {
      const res = await updateAppointmentRequest(id, appointment);
      if (res.status === 200){
        setAppointments((prevAppointments) =>
          prevAppointments.map((prevAppointment) =>
            prevAppointment._id === id ? appointment : prevAppointment
          )
        )
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        updateAppointment,
        getAppointments,
        deleteAppointment,
        getAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
