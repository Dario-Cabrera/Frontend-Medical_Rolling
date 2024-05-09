/* eslint-disable react/prop-types */
import { useAppointment } from "../../Context/AppointmentContext";
import { userAuth } from "../../Context/UserContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getDoctorsRequest, getUsersRequest } from "../../api/doctor.auth";
import { useEffect } from "react";
import moment from "moment-timezone";

moment.tz.setDefault("America/Argentina/Buenos_Aires");

export const AppointmentCard = ({ appointment }) => {
  const [doctors, setDoctors] = useState([]);
  const [users, setUsers] = useState([]);
  const { deleteAppointment, updateAppointment } = useAppointment();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await getDoctorsRequest();
        setDoctors(res.data);
      } catch (error) {}
    };
    fetchDoctors();
    // Verificar si la hora actual es posterior a la hora del turno
    const currentTime = new Date();
    const appointmentTime = new Date(appointment.appointmentTime);
    if (currentTime < appointmentTime && appointment.state === true) {
      // Cambiar el estado del turno a false
      updateAppointment(appointment._id, { ...appointment, state: false });
    }
    //Agregar el condicional de la fecha
  }, []);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsersRequest();
        setUsers(res.data);
      } catch (error) {}
    };
    fetchUsers();
  }, []);

  const findDoctorById = (doctorId) => {
    return doctors.find((doctor) => doctor._id === doctorId);
  };
  const doctor = findDoctorById(appointment.doctor);

  if (!doctor) {
    return null;
  }
  const findUserById = (userId) => {
    return users.find((user) => user._id === userId);
  };
  const user = findUserById(appointment.user);

  if (!user) {
    return null;
  }
  const { isDoctor } = doctor;

  return (
    <div className="bg-white p-4 rounded-lg my-2 shadow-md">
      <header className="flex justify-between">
        <div>
          {isDoctor ? (
            <>
              <p className="font-medium text-c">
                PACIENTE: {user.name} {user.lastname}
              </p>
              <p>
                MÉDICO: {doctor.name} {doctor.lastname}
              </p>
            </>
          ) : (
            <>
              <p className="font-medium text-c">
                MÉDICO: {doctor.name} {doctor.lastname}
              </p>
              <p>ESPECIALIDAD: {doctor.specialty}</p>
            </>
          )}
        </div>
      </header>

      <p className="font-medium text-c">
        DÍA:{" "}
        {new Date(
          moment(appointment.appointmentDate).toDate()
        ).toLocaleDateString()}
      </p>
      <p className="font-medium text-c">HORA: {appointment.appointmentTime}</p>
      <p className="font-medium text-c">CONSULTORIO: 305</p>
    </div>
  );
};
