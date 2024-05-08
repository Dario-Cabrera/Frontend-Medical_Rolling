import { useAppointment } from "../Context/AppointmentContext";
import { useEffect } from "react";
import { userAuth } from "../Context/UserContext";
import { AppointmentCard } from "../Components/Wrappers/AppointmentCard";
import { AppointmentCardHistory } from "../Components/Wrappers/AppointmentCardHistory";

export const PagesUserAppointmentManagement = () => {
  const { getAppointments, getAppointment, appointments } = useAppointment();
  const { user } = userAuth();

  useEffect(() => {
    getAppointment(user.id);
  }, []);
  
  if (appointments.length === 0) return <h1>No hay turnos</h1>;

  // Filtrar turnos activos e inactivos
  const activeAppointments = appointments.filter(
    (appointment) => appointment.state === true
  );
  const inactiveAppointments = appointments.filter(
    (appointment) => appointment.state === false
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenido {user.name}</h1>
      <h2 className="text-2xl font-bold mb-4">MIS TURNOS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">TURNOS ACTIVOS</h2>
          {activeAppointments.map((appointment) => (
            <AppointmentCard appointment={appointment} key={appointment._id} />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">HISTORIAL DE TURNOS</h2>
          {inactiveAppointments.map((appointment) => (
            <AppointmentCardHistory
              appointment={appointment}
              key={appointment._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
