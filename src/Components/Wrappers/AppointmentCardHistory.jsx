import { useState,useEffect } from "react";
import { getDoctorsRequest } from "../../api/doctor.auth";

export const AppointmentCardHistory = ({ appointment }) => {
  const [doctors, setDoctors] = useState([]);
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
      <p className="font-medium">MEDICO: {doctor.name} {doctor.lastname}</p>
      <p>ESPECIALIDAD: {doctor.specialty}</p>
      <p>DIA: {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
      <p>HORA: {new Date(appointment.appointmentTime).toLocaleTimeString()}</p>
    </div>
  );
};
