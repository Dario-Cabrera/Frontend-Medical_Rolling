import {  useForm } from "react-hook-form";
import { useAppointment } from "../Context/AppointmentContext";

export const AppointmentFormPage = () => {
  const { register, handleSubmit, watch } = useForm();

  const { appointments, createAppointment } = useAppointment();

  

  console.log(appointments);

  const selectedSpecialty = watch("specialty");
  const selectedDoctor = watch("doctor");
  const selectedDateTime = watch("dateTime");

  const specialties = [
    { id: 1, name: "Dermatología", doctors: ["Dr. Pérez", "Dra. Gómez"] },
    { id: 2, name: "Pediatría", doctors: ["Dr. Rodríguez", "Dra. Martínez"] },
  ];

  const onSubmit = handleSubmit((data) => {
    createAppointment(data);
  });
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Crear un turno médico</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            htmlFor="specialty"
            className="block text-sm font-medium text-gray-600"
          >
            Especialidad Médica
          </label>
          <select
            id="specialty"
            {...register("specialty")}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Seleccionar especialidad</option>
            {specialties.map((specialty) => (
              <option key={specialty.id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>

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
              {...register("doctor")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Seleccionar médico</option>
              {specialties
                .find((s) => s.name === selectedSpecialty)
                ?.doctors.map((doctor, index) => (
                  <option key={index} value={doctor}>
                    {doctor}
                  </option>
                ))}
            </select>
          </div>
        )}

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
              {...register("dateTime")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        )}

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
