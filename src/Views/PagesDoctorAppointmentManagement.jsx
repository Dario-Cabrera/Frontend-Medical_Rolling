import { useAppointment } from "../Context/AppointmentContext";
import { useEffect } from "react";
import { userAuth } from "../Context/UserContext";
import { AppointmentCard } from "../Components/Wrappers/AppointmentCard";
import { AppointmentCardHistory } from "../Components/Wrappers/AppointmentCardHistory";

export const PagesDoctorAppointmentManagement = () => {
  const { appointments, getAppointmentDoctor } = useAppointment();
  const { doctor } = userAuth();

  useEffect(() => {
    getAppointmentDoctor(doctor.id);
  }, []);

  if (appointments.length === 0)
return (
      <div className="p-4">
        <div className="flex flex-col  min-h-screen">
          <h1 className="text-2xl font-bold mb-4 text-ts">No appointments</h1>;
        </div>
      </div>
    );
  const activeAppointments = appointments.filter(
    (appointment) => appointment.state === true
  );
  const inactiveAppointments = appointments.filter(
    (appointment) => appointment.state === false
  );

  return (
    <div className="p-4">
      <div className="flex flex-col  min-h-screen">
        <h1 className="text-2xl font-bold mb-4">
          Bienvenido {doctor.name} {doctor.lastname}
        </h1>
        <h2 className="text-2xl font-bold mb-4">MIS TURNOS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">TURNOS ACTIVOS</h2>
            {activeAppointments.map((appointment) => (
              <AppointmentCard
                appointment={appointment}
                key={appointment._id}
              />
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
    </div>
  );
};
