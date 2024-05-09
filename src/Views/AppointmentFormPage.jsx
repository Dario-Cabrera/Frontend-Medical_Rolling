import { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
import { userAuth } from "../Context/UserContext";

// Establecer la zona horaria por defecto
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

  // ----POST APPOINTMENTS----

  const [doctores, setDoctores] = useState([]);
  const { user } = userAuth(); // Mover la obtención del usuario logueado dentro del componente
  const [dni, setDni] = useState(user.dni || ""); // Inicializar con el DNI del usuario logueado si está disponible
  const [userId, setUserId] = useState(user.id || ""); // Inicializar con el ID del usuario logueado si está disponible
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
          setUserId(""); // Si no se encuentra un usuario con el DNI especificado, reiniciar el ID del usuario a una cadena vacía
        }
      } else {
        console.error("Error fetching user by DNI:", response.data.message);
        setUserId(""); // En caso de error, reiniciar el ID del usuario a una cadena vacía
      }
    } catch (error) {
      console.error("Error fetching user by DNI:", error);
      setUserId(""); // En caso de error, reiniciar el ID del usuario a una cadena vacía
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
      return response.data; // Devuelve los datos de la cita creada si la solicitud es exitosa
    } catch (error) {
      console.error("Error al crear la cita:", error);
      throw new Error("Error al crear la cita");
    }
  };

  const appointmentCreateValidationSchema = Yup.object().shape({
    // user: Yup.string().required("El usuario es requerido"),
    // doctor: Yup.string().required("El doctor es requerido"),
    appointmentDate: Yup.string().required("La fecha es requerida"),
    appointmentTime: Yup.string().required("La hora es requerida"),
    // state: Yup.string().required("El estado es requerido"),
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
            user: userId, // Inicializar con el ID del usuario logueado
            doctor: "",
            appointmentDate: "",
            appointmentTime: "",
            state: true,
            especialidad: "", // Agrega la especialidad al estado inicial
          }}
          validationSchema={appointmentCreateValidationSchema}
          onSubmit={async (values, { resetForm, setFieldValue }) => {
            try {
              const selectedDate = moment(values.appointmentDate); // Obtener la fecha seleccionada del formulario

              // Obtener la fecha formateada para enviarla al backend
              const formattedDate = selectedDate.format("YYYY-MM-DD");
              // Actualizar el valor de 'doctor' en 'values' con el valor actual de 'doctorId'
              values.doctor = doctorId;
              values.appointmentDate = formattedDate;
              values.user = userId;
              const response = await postAppointment(values);
              // Resto del código...
              openAppointmentCreated();
              resetForm(); // Esta línea reiniciará el formulario
              setFieldValue("doctor", ""); // Reiniciar el valor del campo doctor en Formik
              setDoctorId(""); // Reiniciar el valor del doctor en el estado del componente
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
                  onChange={(e) => handleDniChange(e)} // Manejar cambios en el DNI
                />
              </div>
              <div className="mb-4">
                <Field
                  as="select"
                  className="input-field bg-w text-c border-ts border rounded w-56"
                  name="especialidad"
                  onChange={(e) => {
                    handleEspecialidadChange(e); // Llama a la función handleEspecialidadChange
                    setFieldValue("especialidad", e.target.value);
                    setDoctorId(""); // Resetear el doctor seleccionado cuando se cambia la especialidad
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
                    setFieldValue("doctor", ""); // Reiniciar el valor del campo doctor en Formik
                    setDoctorId(""); // Reiniciar el valor del doctor en el estado del componente
                    resetForm(); // Reiniciar el formulario a los valores iniciales
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
                className="px-4 py-2 bg-ts text-c rounded hover:bg-hb hover:text-w"
                // Llamar a la función para cerrar la modal de confirmación
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
