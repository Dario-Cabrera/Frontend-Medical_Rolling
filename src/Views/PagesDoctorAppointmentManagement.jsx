import { useAppointment } from "../Context/AppointmentContext";
import { useEffect } from "react";
import { userAuth } from "../Context/UserContext";

export const PagesDoctorAppointmentManagement = () => {
  const { getAppointments, appointments } = useAppointment();
  const { doctor } = userAuth();

  useEffect(() => {
    getAppointments();
  }, []);

  if (appointments.length === 0) return <h1>No appointments</h1>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-ts">
        Bienvenido {doctor ? doctor.name : "Sin nombre"}
      </h1>
      <h2 className="text-2xl font-bold mb-4 text-ts">GESTIÓN DE TURNOS</h2>

      {/* Contenedor para turnos activos y historial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sección de TURNOS ACTIVOS */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-ts">TURNOS ACTIVOS</h2>

          {/* Tarjeta de turno activo */}
          <div className="bg-w p-4 rounded-lg my-2 shadow-md">
            <p className="font-medium text-c">PACIENTE: Juan Pérez</p>
            <p className="font-medium text-c">DÍA: 12/04/2024</p>
            <p className="font-medium text-c">HORA: 15:00</p>
            <p className="font-medium text-c">CONSULTORIO: 305</p>
            <button className="btn-info bg-ts hover:bg-hb hover:text-w hover:border-none text-c px-4 py-2 mt-2 rounded-md">
              Cancelar/Modificar
            </button>
          </div>
          <div className="bg-w p-4 rounded-lg my-2 shadow-md">
            <p className="font-medium text-c">PACIENTE: Juan Pérez</p>
            <p className="font-medium text-c">DÍA: 12/04/2024</p>
            <p className="font-medium text-c">HORA: 15:00</p>
            <p className="font-medium text-c">CONSULTORIO: 305</p>
            <button className="btn-info bg-ts hover:bg-hb hover:text-w hover:border-none text-c px-4 py-2 mt-2 rounded-md">
              Cancelar/Modificar
            </button>
          </div>
        </div>

        {/* Sección de HISTORIAL DE TURNOS */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-ts">HISTORIAL DE TURNOS</h2>

          {/* Tarjeta de historial de turno */}
          <div className="bg-w p-4 rounded-lg my-2 shadow-md">
            <p className="font-medium text-c">PACIENTE: Ana Gómez</p>
            <p className="font-medium text-c">DÍA: 10/03/2024</p>
            <p className="font-medium text-c">HORA: 11:00</p>
            <p className="font-medium text-c">CONSULTORIO: 305</p>
          </div>
          <div className="bg-w p-4 rounded-lg my-2 shadow-md">
            <p className="font-medium text-c">PACIENTE: Ana Gómez</p>
            <p className="font-medium text-c">DÍA: 10/03/2024</p>
            <p className="font-medium text-c">HORA: 11:00</p>
            <p className="font-medium text-c">CONSULTORIO: 305</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesDoctorAppointmentManagement;
