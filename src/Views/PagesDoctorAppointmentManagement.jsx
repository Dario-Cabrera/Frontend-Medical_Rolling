import { useAppointment } from "../Context/AppointmentContext";
import { useEffect } from "react";
import { doctorAuth } from "../Context/DoctorContext";


export const PagesDoctorAppointmentManagement = () => {
  const { getAppointments, appointments  } = useAppointment();
  const {doctor}= doctorAuth()

  useEffect(() => {
    getAppointments();
  }, []);

  if (appointments.length === 0) return <h1>No appointments</h1>;


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wellcome {doctor.name}</h1>
      <h2 className="text-2xl font-bold mb-4">GESTIÓN DE TURNOS</h2>

      {/* Contenedor para turnos activos y historial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sección de TURNOS ACTIVOS */}
        <div>
          <h2 className="text-xl font-semibold mb-2">TURNOS ACTIVOS</h2>

          {/* Tarjeta de turno activo */}
          <div className="bg-black p-4 rounded-lg my-2 shadow-md">
            <p className="font-medium">PACIENTE: Juan Pérez</p>
            <p>DÍA: 12/04/2024</p>
            <p>HORA: 15:00</p>
            <p>CONSULTORIO: 305</p>
            <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md">
              Cancelar/Reubicar
            </button>
          </div>
          <div className="bg-black p-4 rounded-lg my-2 shadow-md">
            <p className="font-medium">PACIENTE: Juan Pérez</p>
            <p>DÍA: 12/04/2024</p>
            <p>HORA: 15:00</p>
            <p>CONSULTORIO: 305</p>
            <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md">
              Cancelar/Reubicar
            </button>
          </div>
        </div>

        {/* Sección de HISTORIAL DE TURNOS */}
        <div>
          <h2 className="text-xl font-semibold mb-2">HISTORIAL DE TURNOS</h2>

          {/* Tarjeta de historial de turno */}
          <div className="bg-black p-4 rounded-lg my-2 shadow-md">
            <p className="font-medium">PACIENTE: Ana Gómez</p>
            <p>DÍA: 10/03/2024</p>
            <p>HORA: 11:00</p>
            <p>CONSULTORIO: 305</p>
          </div>
          <div className="bg-black p-4 rounded-lg my-2 shadow-md">
            <p className="font-medium">PACIENTE: Ana Gómez</p>
            <p>DÍA: 10/03/2024</p>
            <p>HORA: 11:00</p>
            <p>CONSULTORIO: 305</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesDoctorAppointmentManagement;
