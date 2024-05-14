import { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
import { userAuth } from "../Context/UserContext";

moment.tz.setDefault("America/Argentina/Buenos_Aires");

export const AppointmentFormPage = () => {
  const especialidadesMedicas = [
    "Anestesiología",
    "Cardiología",
    "Dermatología",
    "Endocrinología",
    "Gastroenterología",
    "Geriatría",
    "Ginecología",
    "Hematología",
    "Infectología",
    "Medicina Familiar",
    "Medicina Interna",
    "Nefrología",
    "Neumología",
    "Neurología",
    "Obstetricia",
    "Odontología",
    "Oncología",
    "Oftalmología",
    "Ortopedia",
    "Otorrinolaringología",
    "Pediatría",
    "Psiquiatría",
    "Radiología",
    "Reumatología",
    "Traumatología",
    "Urología",
  ];

  const [doctores, setDoctores] = useState([]);
  const { user } = userAuth();
  const [dni, setDni] = useState(user.dni || "");
  const [userId, setUserId] = useState(user.id || "");
  const [doctoresCreate, setDoctoresCreate] = useState([]);
  const [showAppointmentCreated, setShowAppointmentCreated] = useState(false);

  const handleDniChange = async (event) => {
    const enteredDni = event.target.value;
    setDni(enteredDni);

    try {
      const response = await axios.get(`https://backend-medical-rolling.vercel.app/api/getUserByDNI/${enteredDni}`);
      if (response.status === 200) {
        const user = response.data;
        if (user) {
          setUserId(user._id);
        } else {
          setUserId("");
        }
      } else {
        console.error("Error fetching user by DNI:", response.data.message);
        setUserId("");
      }
    } catch (error) {
      console.error("Error fetching user by DNI:", error);
      setUserId("");
    }
  };

  const [doctorId, setDoctorId] = useState("");
  const [availableTimesCreate, setAvailableTimesCreate] = useState([]);
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");

  const handleDoctorChangeCreate = (event) => {
    const selectedDoctorId = event.target.value;
    setDoctorId(selectedDoctorId);
  };

  const handleDateChangeCreate = async (date) => {
    try {
      const response = await axios.get("https://backend-medical-rolling.vercel.app/api/availableTimes", {
        params: {
          doctorId: doctorId,
          date: moment(date).format("YYYY-MM-DD"),
        },
      });
      setAvailableTimesCreate(response.data.availableTimes);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  const generateTimeOptionsCreate = () => {
    return availableTimesCreate.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ));
  };

  const handleEspecialidadChange = (event) => {
    const selectedEspecialidad = event.target.value;
    setEspecialidadSeleccionada(selectedEspecialidad);
  };

  useEffect(() => {
    if (especialidadSeleccionada) {
      axios
        .get(`https://backend-medical-rolling.vercel.app/api/doctorsbyspecialty/${especialidadSeleccionada}`)
        .then((response) => {
          setDoctoresCreate(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener los doctores:", error);
        });
    }
  }, [especialidadSeleccionada]);

  const postAppointment = async (formData) => {
    try {
      const response = await axios.post("https://backend-medical-rolling.vercel.app/api/createappointment/", formData);
      return response.data;
    } catch (error) {
      console.error("Error al crear la cita:", error);
      throw new Error("Error al crear la cita");
    }
  };

  const appointmentCreateValidationSchema = Yup.object().shape({
    appointmentDate: Yup.string().required("La fecha es requerida"),
    appointmentTime: Yup.string().required("La hora es requerida"),
  });

  const openAppointmentCreated = () => {
    setShowAppointmentCreated(true);
  };

  const closeAppointmentCreated = () => {
    setShowAppointmentCreated(false);
  };

  return (
    <div className="flex justify-center items-center p-40">
      <div className="bg-w text-c rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Crear Turno</h1>
        <Formik
          initialValues={{
            user: userId,
            doctor: "",
            appointmentDate: "",
            appointmentTime: "",
            state: true,
            especialidad: "",
          }}
          validationSchema={appointmentCreateValidationSchema}
          onSubmit={async (values, { resetForm, setFieldValue }) => {
            try {
              const selectedDate = moment(values.appointmentDate);

              const formattedDate = selectedDate.format("YYYY-MM-DD");
              values.doctor = doctorId;
              values.appointmentDate = formattedDate;
              values.user = userId;
              const response = await postAppointment(values);

              openAppointmentCreated();
              resetForm();
              setFieldValue("doctor", "");
              setDoctorId("");
            } catch (error) {
              console.error("Error al crear la cita:", error);
            }
          }}>
          {({ handleSubmit, values, setFieldValue, resetForm }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  className="input-field bg-w text-c border-ts border rounded w-56"
                  name="dni"
                  placeholder="DNI/LC/LE/PASSPORT"
                  value={dni}
                  readOnly
                  onChange={(e) => handleDniChange(e)}
                />
              </div>
              <div className="mb-4">
                <Field
                  as="select"
                  className="input-field bg-w text-c border-ts border rounded w-56"
                  name="especialidad"
                  onChange={(e) => {
                    handleEspecialidadChange(e);
                    setFieldValue("especialidad", e.target.value);
                    setDoctorId("");
                  }}>
                  <option value="">Selecciona una especialidad</option>
                  {especialidadesMedicas.map((especialidad, index) => (
                    <option key={index} value={especialidad}>
                      {especialidad}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="especialidad" component="div" className="text-red-300" />
              </div>
              <div className="mb-4">
                <select className="input-field bg-w text-c border-ts border rounded w-56" name="doctor" value={doctorId} onChange={handleDoctorChangeCreate}>
                  <option value="">Selecciona un doctor</option>
                  {doctoresCreate.map((doctor) => (
                    <option key={doctor._id} value={doctor._id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
                <ErrorMessage name="doctor" component="div" className="text-red-300" />
              </div>
              <div className="mb-4">
                <DatePicker
                  className="input-field bg-w text-c border border-ts rounded w-56"
                  selected={values.appointmentDate}
                  onChange={(date) => {
                    setFieldValue("appointmentDate", date);
                    handleDateChangeCreate(date);
                  }}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Selecciona una fecha"
                  name="appointmentDate"
                  filterDate={(date) => {
                    const day = date.getDay();
                    const today = new Date();
                    return day !== 0 && day !== 6 && date >= today;
                  }}
                />
                <ErrorMessage name="appointmentDate" component="div" className="text-red-300" />
              </div>
              <div className="mb-4">
                <Field as="select" className="input-field bg-w text-c border border-ts rounded w-56" name="appointmentTime">
                  <option value="">Selecciona una hora</option>
                  {generateTimeOptionsCreate()}
                </Field>
                <ErrorMessage name="appointmentTime" component="div" className="text-red-300" />
              </div>
              <div className="flex justify-between">
                <button type="submit" className="btn text-black bg-ts hover:bg-hb hover:text-w w-24">
                  Crear cita
                </button>
                <button
                  type="button"
                  className="btn text-black bg-ts hover:bg-hb hover:text-w w-24"
                  onClick={() => {
                    setFieldValue("doctor", "");
                    setDoctorId("");
                    resetForm();
                  }}>
                  Borrar
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
      {showAppointmentCreated && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeAppointmentCreated}>
          <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
            <p className="text-c font-medium">Turno creado correctamente.</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => {
                  closeAppointmentCreated();
                }}
                className="px-4 py-2 bg-ts text-c rounded hover:bg-hb hover:text-w">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
