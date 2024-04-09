export const PagesUserAppointmentManagement = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">MIS TURNOS</h1>

      {/* Contenedor para turnos activos y historial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sección de TURNOS ACTIVOS */}
        <div>
          <h2 className="text-xl font-semibold mb-2">TURNOS ACTIVOS</h2>

          {/* Tarjeta de turno activo */}
          <div className="bg-black p-4 rounded-lg my-2 shadow-md">
            <p className="font-medium">MEDICO: Dr. Juan Pérez</p>
            <p>ESPECIALIDAD: Cardiología</p>
            <p>DIA: 12/04/2024</p>
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
            <p className="font-medium">NOMBRE: Dr. Ana Gómez</p>
            <p>ESPECIALIDAD: Dermatología</p>
            <p>DIA: 12/04/2024</p>
            <p>HORA: 15:00</p>
            <p>CONSULTORIO: 210</p>
          </div>
        </div>
      </div>
    </div>
  );
};
