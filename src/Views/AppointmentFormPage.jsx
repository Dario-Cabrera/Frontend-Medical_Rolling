import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppointment } from "../Context/AppointmentContext";
import { useNavigate, useParams } from "react-router-dom";
import { getDoctorsRequest } from "../api/doctor.auth.js";
import { createRequestAppointment } from "../api/appointment.auth";

export const AppointmentFormPage = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const { getAppointment, updateAppointment } = useAppointment();
  const navigate = useNavigate();
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadAppointment = async () => {
      if (params.id) {
        const appointment = await getAppointment(params.id);
        if (appointment) {
          setValue("specialty", appointment.specialty);
          setValue("doctor", appointment.doctor);
          setValue("dateTime", appointment.dateTime);
          // Parsear la fecha y hora para establecer los valores iniciales
          const [date, time] = appointment.dateTime.split("T");
          setSelectedDate(date);
          setSelectedTime(time);
          console.log("Estoy en loadAppointment")
        }
      }
    };
    loadAppointment();
  }, [params.id, getAppointment, setValue]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await getDoctorsRequest();
        setDoctors(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctors();
  }, []);

  const onSubmit = async (data) => {
    console.log("Soy la data:",data)
 // Verifica los valores de selectedDate y selectedTime
 console.log("selectedDate:", selectedDate);
 console.log("selectedTime:", selectedTime);

    const appointmentDate = `${selectedDate}T00:00:00Z`;
    const appointmentTime = `${selectedDate}T${selectedTime}:00Z`;

    if (params.id) {
      const updateDate = await updateAppointment(params.id, {
        ...data,
        appointmentDate,
        appointmentTime,
      });
      navigate("/appointmentsUser");
    }  else {
      const selectedDoctor = doctors.find(
        (doctor) => doctor.name === data.doctor
      );

      if (!selectedDoctor) {
        console.error("No se encontró el doctor seleccionado");
        return;
      }

      const doctorId = selectedDoctor._id; // Obtener el ID del doctor seleccionado

      const appointmentData = {
        ...data,
        appointmentDate,
        appointmentTime,
      };

      try {
        const response = await createRequestAppointment(
          appointmentData,
          token,
          doctorId
        );
        if (response && response.data && response.data.appointmentSaved) {
          navigate("/appointmentsUser");
        } else {
          console.error("Error al crear el turno:", response.data.message);
        }
      } catch (error) {
        console.error("Error al crear el turno:", error);
      }
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Crear un turno médico</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {Array.from(new Set(doctors.map((doctor) => doctor.specialty))).map(
              (specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              )
            )}
          </select>
        </div>

        {watch("specialty") && (
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
              {doctors
                .filter((doctor) => doctor.specialty === watch("specialty"))
                .map((doctor) => (
                  <option key={doctor._id} value={doctor.name}>
                    {doctor.name}
                  </option>
                ))}
            </select>
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-600"
          >
            Fecha del Turno
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-600"
          >
            Hora del Turno
          </label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          disabled={!selectedDate || !selectedTime}
        >
          Confirmar Turno
        </button>
      </form>
    </div>
  );
};
