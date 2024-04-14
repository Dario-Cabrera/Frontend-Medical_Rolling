import { useState } from "react";

export const AppointmentFormPage = () => {
  // Estado para almacenar la selección del usuario
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState("");

  // Datos de ejemplo para especialidades médicas y médicos
  const specialties = [
    { id: 1, name: "Dermatología", doctors: ["Dr. Pérez", "Dra. Gómez"] },
    { id: 2, name: "Pediatría", doctors: ["Dr. Rodríguez", "Dra. Martínez"] },
  ];

  // Manejar cambio de especialidad seleccionada
  const handleSpecialtyChange = (event) => {
    const specialtyId = event.target.value;
    setSelectedSpecialty(specialtyId);
    // Reiniciar la selección de médico cuando cambia la especialidad
    setSelectedDoctor("");
  };

  // Manejar cambio de médico seleccionado
  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  // Manejar cambio de fecha/hora seleccionada
  const handleDateTimeChange = (event) => {
    setSelectedDateTime(event.target.value);
  };

  // Renderizar opciones de especialidades médicas
  const renderSpecialtyOptions = () => {
    return specialties.map((specialty) => (
      <option key={specialty.id} value={specialty.id}>
        {specialty.name}
      </option>
    ));
  };

  // Renderizar opciones de médicos basados en la especialidad seleccionada
  const renderDoctorOptions = () => {
    if (!selectedSpecialty) return null;

    const selectedSpecialtyObj = specialties.find(
      (s) => s.id === parseInt(selectedSpecialty)
    );
    if (!selectedSpecialtyObj) return null;

    return selectedSpecialtyObj.doctors.map((doctor, index) => (
      <option key={index} value={doctor}>
        {doctor}
      </option>
    ));
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Crear un turno médico</h2>
      <form>
        {/* Selección de especialidad médica */}
        <div className="mb-4">
          <label
            htmlFor="specialty"
            className="block text-sm font-medium text-gray-600"
          >
            Especialidad Médica
          </label>
          <select
            id="specialty"
            name="specialty"
            value={selectedSpecialty}
            onChange={handleSpecialtyChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Seleccionar especialidad</option>
            {renderSpecialtyOptions()}
          </select>
        </div>

        {/* Selección de médico dentro de la especialidad */}
        {selectedSpecialty && (
          <div className="mb-4">
            <label
              htmlFor="doctor"
              className="block text-sm font-medium text-gray-600"
            >
              Médico
            </label>
            <select
              id="doctor"
              name="doctor"
              value={selectedDoctor}
              onChange={handleDoctorChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Seleccionar médico</option>
              {renderDoctorOptions()}
            </select>
          </div>
        )}

        {/* Calendario interactivo para elegir fecha/hora del turno */}
        {selectedDoctor && (
          <div className="mb-4">
            <label
              htmlFor="dateTime"
              className="block text-sm font-medium text-gray-600"
            >
              Fecha y Hora del Turno
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={selectedDateTime}
              onChange={handleDateTimeChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        )}

        {/* Botón para confirmar la reserva del turno */}
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          disabled={!selectedDateTime}
        >
          Confirmar Turno
        </button>
      </form>
    </div>
  );
};
