import { useAppointment } from "../../Context/AppointmentContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getDoctorsRequest } from "../../api/doctor.auth";
import { useEffect } from "react";

export const AppointmentCard = ({ appointment }) => {
  const [doctors, setDoctors] = useState([]);

  const { deleteAppointment } = useAppointment();

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

  const findDoctorById = (doctorId) => {
    return doctors.find((doctor) => doctor._id === doctorId);
  };
  const doctor = findDoctorById(appointment.doctor);

  if (!doctor) {
    return null;
  }

  return (
    <div className="bg-white p-4 rounded-lg my-2 shadow-md">
      <header className="flex justify-between">
        <div>
          <p className="font-medium text-c">
            MÉDICO: {doctor.name} {doctor.lastname}
          </p>
          <p className="font-medium text-c">
            ESPECIALIDAD: {doctor.specialty}</p>
        </div>
        <div className="flex gap-x-2 items-center text-c">
          <button
            onClick={() => {
              deleteAppointment(appointment._id);
            }}
            className="btn-info bg-ts hover:bg-hb hover:text-w hover:border-none text-c px-4 py-2 mt-2 rounded-md"
          >
            Cancelar
          </button>
          <Link
            to={`/appointments/${appointment._id}`}
            className="btn-info bg-ts hover:bg-hb hover:text-w hover:border-none text-c px-4 py-2 mt-2 rounded-md"
          >
            Modificar
          </Link>
        </div>
      </header>

      <p className="font-medium text-c">DÍA: {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
      <p className="font-medium text-c">HORA: {new Date(appointment.appointmentTime).toLocaleTimeString()}</p>
      <p className="font-medium text-c">CONSULTORIO: 305</p>
    </div>
  );
};
