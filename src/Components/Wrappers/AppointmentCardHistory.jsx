import { useState, useEffect } from "react";
import { getDoctorsRequest } from "../../api/doctor.auth";
import { useAppointment } from "../../Context/AppointmentContext";

export const AppointmentCardHistory = ({ appointment }) => {
  const [doctors, setDoctors] = useState([]);
  const { deleteAppointment, updateAppointment } = useAppointment();
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await getDoctorsRequest();
        setDoctors(res.data);
      } catch (error) {}
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
      <p className="font-medium text-c">MEDICO: {doctor.name} {doctor.lastname}</p>
      <p className="font-medium text-c">ESPECIALIDAD: {doctor.specialty}</p>
      <p className="font-medium text-c">DIA: {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
      <p className="font-medium text-c">HORA: {new Date(`1970-01-01T${appointment.appointmentTime}:00Z`).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}</p>
      <button
        onClick={() => {
          deleteAppointment(appointment._id);
        }}
        className="btn-info bg-ts hover:bg-hb hover:text-w hover:border-none text-c px-4 py-2 mt-2 rounded-md">
        Eliminar
      </button>
    </div>
  );
};
