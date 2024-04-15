import { useState, useEffect } from "react";
import eliminar from "../../assets/img/trash and edit/eliminar.png";
import lapiz from "../../assets/img/trash and edit/lapiz.png";
import estrellavacia from "../../assets/img/fijar/estrellavacia.png";
import estrellallena from "../../assets/img/fijar/estrellallena.png";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Table = () => {
  // ----CRUD----

  // ----GET USERS----

  const [usuarios, setUsuarios] = useState([]);

  // Función para obtener los usuarios desde el backend
  async function obtenerUsuariosDesdeBackend() {
    try {
      const response = await axios.get("http://localhost:3000/users/gettingusers");
      setUsuarios(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error al obtener los usuarios desde el backend:", error);
    }
  }

  useEffect(() => {
    // Llamar a la función para obtener los usuarios cuando el componente se monta
    obtenerUsuariosDesdeBackend();
  }, []);

  // ----GET DOCTORS----

  const [doctores, setDoctores] = useState([]);

  // Función para obtener los usuarios desde el backend
  async function obtenerDoctoresDesdeBackend() {
    try {
      const response = await axios.get("http://localhost:3000/doctors/gettingdoctors");
      setDoctores(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error al obtener los usuarios desde el backend:", error);
    }
  }

  useEffect(() => {
    // Llamar a la función para obtener los usuarios cuando el componente se monta
    obtenerDoctoresDesdeBackend();
  }, []);

  // ----GET APPOINMENTS----

  const [citas, setCitas] = useState([]);

  // Función para obtener los usuarios desde el backend
  async function obtenerCitasDesdeBackend() {
    try {
      const response = await axios.get("http://localhost:3000/appointments/gettingappointments");
      setCitas(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error al obtener los usuarios desde el backend:", error);
    }
  }

  useEffect(() => {
    // Llamar a la función para obtener los usuarios cuando el componente se monta
    obtenerCitasDesdeBackend();
  }, []);

  // ----DELETE USERS----

  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const handleCaptureUserId = (usuarioId) => {
    setUserIdToDelete(usuarioId);
    console.log("ID capturado:", usuarioId);
  };

  const handleDeleteUserConfirm = () => {
    if (!userIdToDelete) {
      console.log("No se ha capturado ningún ID para eliminar.");
      return;
    }

    axios
      .delete(`http://localhost:3000/users/deleteusers/${userIdToDelete}`)
      .then((response) => {
        console.log("Usuario eliminado con éxito:", response);
        // Aquí puedes realizar acciones adicionales si es necesario, como mostrar un mensaje de éxito o actualizar la lista de usuarios
      })
      .catch((error) => {
        console.error("Error al eliminar usuario:", error);
        // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
      })
      .finally(() => {
        // Después de enviar la solicitud, ocultar el modal de confirmación y mostrar el modal de éxito
        setShowDeleteModalUser(false);
        setShowSuccessModalUser(true);
        obtenerUsuariosDesdeBackend();
      });
  };

  // ----DELETE DOCTORS----

  const [doctorIdToDelete, setDoctorIdToDelete] = useState(null);

  const handleCaptureDoctorId = (doctorId) => {
    setDoctorIdToDelete(doctorId);
    console.log("ID capturado:", doctorId);
  };

  const handleDeleteDoctorConfirm = () => {
    if (!doctorIdToDelete) {
      console.log("No se ha capturado ningún ID para eliminar.");
      return;
    }

    axios
      .delete(`http://localhost:3000/doctors/deletedoctors/${doctorIdToDelete}`)
      .then((response) => {
        console.log("Doctor eliminado con éxito:", response);
        // Aquí puedes realizar acciones adicionales si es necesario, como mostrar un mensaje de éxito o actualizar la lista de usuarios
      })
      .catch((error) => {
        console.error("Error al eliminar doctor:", error);
        // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
      })
      .finally(() => {
        // Después de enviar la solicitud, ocultar el modal de confirmación y mostrar el modal de éxito
        setShowDeleteModalDoctor(false);
        setShowSuccessModalDoctor(true);
        obtenerDoctoresDesdeBackend();
      });
  };

  // ----DELETE APPOINMENTS----

  const [citaIdToDelete, setCitaIdToDelete] = useState(null);

  const handleCaptureCitaId = (citaId) => {
    setCitaIdToDelete(citaId);
    console.log("ID capturado:", citaId);
  };

  const handleDeleteCitaConfirm = () => {
    if (!citaIdToDelete) {
      console.log("No se ha capturado ningún ID para eliminar.");
      return;
    }

    axios
      .delete(`http://localhost:3000/appointments/deleteappointments/${citaIdToDelete}`)
      .then((response) => {
        console.log("Cita eliminada con éxito:", response);
        // Aquí puedes realizar acciones adicionales si es necesario, como mostrar un mensaje de éxito o actualizar la lista de usuarios
      })
      .catch((error) => {
        console.error("Error al eliminar cita:", error);
        // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
      })
      .finally(() => {
        // Después de enviar la solicitud, ocultar el modal de confirmación y mostrar el modal de éxito
        setShowDeleteModalAppoinment(false);
        setShowSuccessModalAppoinment(true);
        obtenerCitasDesdeBackend();
      });
  };

  // ----UPDATE USERS----

  const [userIdToUpdate, setUserIdToUpdate] = useState(null);

  const handleCaptureUserIdUpdate = (usuarioId) => {
    setUserIdToUpdate(usuarioId);
    console.log("ID capturado:", usuarioId);
  };
  const [userDataToUpdate, setUserDataToUpdate] = useState(null);

  // Función para obtener los datos del usuario a actualizar y guardarlos en userDataToUpdate
  const obtenerDatosUsuario = (datos) => {
    setUserDataToUpdate(datos);
  };

  const handleSaveChangesUserConfirm = () => {
    if (!userIdToUpdate || !userDataToUpdate) {
      console.log("No se ha capturado ningún ID o datos de usuario para actualizar.");
      return;
    }

    axios
      .put(`http://localhost:3000/users/updateusers/${userIdToUpdate}`, userDataToUpdate)
      .then((response) => {
        console.log("Usuario actualizado con éxito:", response);
        // Aquí puedes realizar acciones adicionales si es necesario, como mostrar un mensaje de éxito o actualizar la lista de usuarios
        closeEditModalUser();
      })
      .catch((error) => {
        console.error("Error al actualizar usuario:", error);
        // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
      })
      .finally(() => {
        // Si deseas realizar acciones adicionales después de la solicitud, puedes hacerlo aquí
        obtenerUsuariosDesdeBackend();
      });
  };

  // ----CRUD----

  // Funciones para cambiar de tabla con botones
  const [activeTab, setActiveTab] = useState("Users");

  // Estado para la búsqueda global
  const [busqueda, setBusqueda] = useState("");

  // Estado para el campo de ordenamiento actual y dirección
  const [campoOrdenActual, setCampoOrdenActual] = useState("");
  const [direccionOrdenActual, setDireccionOrdenActual] = useState("asc");

  // Funciones para cambiar el estado de la estrella
  const [starFilledUsers, setStarFilledUsers] = useState(false); // Estado para controlar la estrella de Users
  const [starFilledDoctors, setStarFilledDoctors] = useState(false); // Estado para controlar la estrella de Doctors
  const [starFilledAppointments, setStarFilledAppointments] = useState(false); // Estado para controlar la estrella de Appointments

  const [showDeleteModalUser, setShowDeleteModalUser] = useState(false); // Estado para controlar la visibilidad de la modal Users
  const [showDeleteModalDoctor, setShowDeleteModalDoctor] = useState(false); // Estado para controlar la visibilidad de la modal Doctors
  const [showDeleteModalAppoinment, setShowDeleteModalAppoinment] = useState(false); // Estado para controlar la visibilidad de la modal Doctors

  const [showSuccessModalUser, setShowSuccessModalUser] = useState(false); // Estado para controlar la visibilidad de la modal de confirmación de eliminación de Users
  const [showSuccessModalDoctor, setShowSuccessModalDoctor] = useState(false); // Estado para controlar la visibilidad de la modal de confirmación de eliminación de Doctors
  const [showSuccessModalAppoinment, setShowSuccessModalAppoinment] = useState(false); // Estado para controlar la visibilidad de la modal de confirmación de eliminación de Appointments

  const [showEditModalUser, setShowEditModalUser] = useState(false); // Estado para controlar la visibilidad de la modal Edit Users
  const [showEditModalDoctor, setShowEditModalDoctor] = useState(false); // Estado para controlar la visibilidad de la modal Edit Doctors
  const [showEditModalAppoinment, setShowEditModalAppoinment] = useState(false); // Estado para controlar la visibilidad de la modal Edit Appointments

  const [showSaveChangesModalUser, setShowSaveChangesModalUser] = useState(false); // Estado para controlar la visibilidad de la modal de confirmación de edit de Users
  const [showSaveChangesModalDoctor, setShowSaveChangesModalDoctor] = useState(false); // Estado para controlar la visibilidad de la modal de confirmación de edit de Doctors
  const [showSaveChangesModalAppoinment, setShowSaveChangesModalAppoinment] = useState(false); // Estado para controlar la visibilidad de la modal de confirmación de edit de Appointments

  const [showCreateNewModalUser, setShowCreateNewModalUser] = useState(false); // Estado para controlar la visibilidad de la modal Edit Users
  const [showCreateNewModalDoctor, setShowCreateNewModalDoctor] = useState(false); // Estado para controlar la visibilidad de la modal Edit Doctors
  const [showCreateNewModalAppoinment, setShowCreateNewModalAppoinment] = useState(false); // Estado para controlar la visibilidad de la modal Edit Appointments

  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del dropdown

  const [showCreateNewModalUserConfirm, setShowCreateNewModalUserConfirm] = useState(false); // Estado para controlar la visibilidad de la modal de confirmación de creacion de Users
  const [showCreateNewModalDoctorConfirm, setShowCreateNewModalDoctorConfirm] = useState(false); // Estado para controlar la visibilidad de la modal de confirmación de creacion de Doctors
  const [showCreateNewModalAppoinmentConfirm, setShowCreateNewModalAppoinmentConfirm] = useState(false); // Estado para controlar la visibilidad de la modal de confirmación de creacion de Appointments

  const [showAppointmentbyIdUserModal, setShowAppointmentbyIdUserModal] = useState(false); // Estado para controlar la visibilidad de la modal de citas del User
  const [showAppointmentbyIdDoctorModal, setShowAppointmentbyIdDoctorModal] = useState(false); // Estado para controlar la visibilidad de la modal de citas del Doctor

  const userValidationSchema = Yup.object().shape({
    email: Yup.string().email("Correo electrónico inválido").required("El correo electrónico es requerido"),
    password: Yup.string()
      .required("La contraseña es requerida")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial"
      ),
    telefono: Yup.string()
      .matches(/^\d{9}$/, "El teléfono debe tener 9 dígitos")
      .required("El teléfono es requerido"),
    dni: Yup.string().required("El DNI es requerido"),
    nombre: Yup.string().required("El nombre es requerido"),
    apellido: Yup.string().required("El apellido es requerido"),
    provincia: Yup.string().required("La provincia es requerida"),
    direccion: Yup.string().required("La dirección es requerida"),
    area: Yup.number().required("El área es requerida"),
    rol: Yup.string().required("El rol es requerido"),
  });

  const doctorValidationSchema = Yup.object().shape({
    email: Yup.string().email("Correo electrónico inválido").required("El correo electrónico es requerido"),
    password: Yup.string()
      .required("La contraseña es requerida")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial"
      ),
    dni: Yup.string().required("El DNI es requerido"),
    nombre: Yup.string().required("El nombre es requerido"),
    apellido: Yup.string().required("El apellido es requerido"),
    rol: Yup.string().required("El rol es requerido"),
    especialidad: Yup.string().required("La especialidad es requerida"),
    numLicencia: Yup.string().required("El número de licencia es requerido"),
  });

  const appointmentValidationSchema = Yup.object().shape({
    usuario: Yup.string().required("El usuario es requerido"),
    doctor: Yup.string().required("El doctor es requerido"),
    fecha: Yup.string().required("La fecha es requerida"),
    hora: Yup.string().required("La hora es requerida"),
    estado: Yup.string().required("El estado es requerido"),
  });

  // Función para filtrar y ordenar los datos
  const filtrarYOrdenarDatos = (datos) => {
    let datosFiltrados = datos.filter((fila) => Object.values(fila).some((valor) => typeof valor === "string" && valor.toLowerCase().includes(busqueda.toLowerCase())));

    if (campoOrdenActual) {
      datosFiltrados = datosFiltrados.sort((a, b) => {
        const valorA = a[campoOrdenActual];
        const valorB = b[campoOrdenActual];

        if (valorA < valorB) {
          return direccionOrdenActual === "asc" ? -1 : 1;
        }
        if (valorA > valorB) {
          return direccionOrdenActual === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return datosFiltrados;
  };

  // Filtrar y ordenar los datos según la búsqueda y el orden actual
  const usuariosFiltrados = filtrarYOrdenarDatos(usuarios);
  const doctoresFiltrados = filtrarYOrdenarDatos(doctores);
  const citasFiltradas = filtrarYOrdenarDatos(citas);

  //Funciones para manejar los filtros busqueda y de ordenamiento
  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  // Función para manejar el ordenamiento
  const handleOrdenar = (campo) => {
    if (campo === campoOrdenActual) {
      // Si el campo de ordenamiento actual es el mismo, cambiar la dirección
      setDireccionOrdenActual(direccionOrdenActual === "asc" ? "desc" : "asc");
    } else {
      // Si el campo de ordenamiento es diferente, establecer nuevo campo y dirección ascendente
      setCampoOrdenActual(campo);
      setDireccionOrdenActual("asc");
    }
  };

  // Funciones para manejar la visibilidad de la modal de appoinments by id user
  const openAppointmentByIdUserModal = () => {
    setShowAppointmentbyIdUserModal(true); // Abre la modal
  };

  const closeAppointmentByIdUserModal = () => {
    setShowAppointmentbyIdUserModal(false); // Cierra la modal
  };

  // Funciones para manejar la visibilidad de la modal de appoinments by id doctor
  const openAppointmentByIdDoctorModal = () => {
    setShowAppointmentbyIdDoctorModal(true); // Abre la modal
  };

  const closeAppointmentByIdDoctorModal = () => {
    setShowAppointmentbyIdDoctorModal(false); // Cierra la modal
  };

  // Funciones para confirmar creacion de un Appointment
  const handleCreateNewAppoinmentConfirm = () => {
    setShowCreateNewModalAppoinmentConfirm(true);
  };

  const handleCerrarCreateNewAppoinmentSuccess = () => {
    setShowCreateNewModalAppoinmentConfirm(false);
  };
  // Funciones para confirmar creacion de un Doctor
  const handleCreateNewDoctorConfirm = () => {
    setShowCreateNewModalDoctorConfirm(true);
  };

  const handleCerrarCreateNewDoctorSuccess = () => {
    setShowCreateNewModalDoctorConfirm(false);
  };
  // Funciones para confirmar creacion de un User
  const handleCreateNewUserConfirm = () => {
    setShowCreateNewModalUserConfirm(true);
  };

  const handleCerrarCreateNewUserSuccess = () => {
    setShowCreateNewModalUserConfirm(false);
  };

  // Funciones para abrir y cerrar la modal Create New Appointment
  const closeDropdownAndOpenCreateNewModalAppointment = () => {
    openCreateNewModalAppointment();
    closeDropdown();
  };

  // Funciones para abrir y cerrar la modal Create New Doctor
  const closeDropdownAndOpenCreateNewModalDoctor = () => {
    openCreateNewModalDoctor();
    closeDropdown();
  };

  // Funciones para abrir y cerrar la modal Create New User
  const closeDropdownAndOpenCreateNewModalUser = () => {
    openCreateNewModalUser();
    closeDropdown();
  };
  // Funciones para abrir y cerrar la modal Create New Users
  const openCreateNewModalUser = () => {
    setShowCreateNewModalUser(true);
  };

  const closeCreateNewModalUser = () => {
    setShowCreateNewModalUser(false);
  };

  // Funciones para abrir y cerrar la modal Create New Doctors
  const openCreateNewModalDoctor = () => {
    setShowCreateNewModalDoctor(true);
  };

  const closeCreateNewModalDoctor = () => {
    setShowCreateNewModalDoctor(false);
  };

  // Funciones para abrir y cerrar la modal Create New Appointments
  const openCreateNewModalAppointment = () => {
    setShowCreateNewModalAppoinment(true);
  };

  const closeCreateNewModalAppointment = () => {
    setShowCreateNewModalAppoinment(false);
  };

  // Funciones para confirmar los cambios guardados de un Appointment
  const handleSaveChangesAppoinmentConfirm = () => {
    setShowSaveChangesModalAppoinment(true);
  };

  const handleCerrarSaveChangesAppoinmentSuccess = () => {
    setShowSaveChangesModalAppoinment(false);
  };
  // Funciones para confirmar los cambios guardados de un Doctor
  const handleSaveChangesDoctorConfirm = () => {
    setShowSaveChangesModalDoctor(true);
  };

  const handleCerrarSaveChangesDoctorSuccess = () => {
    setShowSaveChangesModalDoctor(false);
  };
  // Funciones para confirmar los cambios guardados de un User
  // const handleSaveChangesUserConfirm = () => {
  //   setShowSaveChangesModalUser(true);
  // };

  const handleCerrarSaveChangesUserSuccess = () => {
    setShowSaveChangesModalUser(false);
  };

  const handleCerrarDeleteAppoinmentSucess = () => {
    // Aquí puedes manejar la cancelación de la eliminación del usuario
    setShowSuccessModalAppoinment(false);
  };

  const handleCerrarDeleteDoctorSucess = () => {
    // Aquí puedes manejar la cancelación de la eliminación del doctor
    setShowSuccessModalDoctor(false);
  };

  const handleCerrarDeleteUserSucess = () => {
    // Aquí puedes manejar la cancelación de la eliminación del usuario
    setShowSuccessModalUser(false);
  };

  // Funciones para abrir y cerrar la modal EditUsers
  const openEditModalUser = () => {
    setShowEditModalUser(true);
  };

  const closeEditModalUser = () => {
    setShowEditModalUser(false);
  };

  // Funciones para abrir y cerrar la modal EditDoctors
  const openEditModalDoctor = () => {
    setShowEditModalDoctor(true);
  };

  const closeEditModalDoctor = () => {
    setShowEditModalDoctor(false);
  };

  // Funciones para abrir y cerrar la modal EditAppointments
  const openEditModalAppointment = () => {
    setShowEditModalAppoinment(true);
  };

  const closeEditModalAppointment = () => {
    setShowEditModalAppoinment(false);
  };

  // Funciones para abrir y cerrar la modal DeleteUsers
  const openDeleteModalUser = () => {
    setShowDeleteModalUser(true);
  };

  const closeDeleteModalUser = () => {
    setShowDeleteModalUser(false);
  };

  // Funciones para abrir y cerrar la modal DeleteDoctors
  const openDeleteModalDoctor = () => {
    setShowDeleteModalDoctor(true);
  };

  const closeDeleteModalDoctor = () => {
    setShowDeleteModalDoctor(false);
  };

  // Funciones para abrir y cerrar la modal DeleteAppointments
  const openDeleteModalAppointment = () => {
    setShowDeleteModalAppoinment(true);
  };

  const closeDeleteModalAppointment = () => {
    setShowDeleteModalAppoinment(false);
  };

  // Funciones cambiar entre las tablas
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Cambiar el estado de la estrella de vacía a llena o viceversa de User
  const handleStarClickUsers = () => {
    setStarFilledUsers(!starFilledUsers);
  };

  // Cambiar el estado de la estrella de vacía a llena o viceversa de Doctors
  const handleStarClickDoctors = () => {
    setStarFilledDoctors(!starFilledDoctors);
  };

  // Cambiar el estado de la estrella de vacía a llena o viceversa de Appointments
  const handleStarClickAppointments = () => {
    setStarFilledAppointments(!starFilledAppointments);
  };

  // Cierrar boton Create New
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-w">
      {/* component */}
      <section className="container mx-auto max-w-full p-6 font-sans">
        {/* ---Boton Export y Create New--- */}
        <div className="sm:flex sm:items-center sm:justify-between ">
          <div>
            {/* ---Botones Users, Doctors y Appoinments--- */}
            <div className="inline-flex overflow-hidden bg-hb text-w border divide-x rounded-lg rtl:flex-row-reverse  border-c  divide-c">
              <button
                className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm hover:bg-ts hover:text-c ${activeTab === "Users" ? "bg-ts text-c" : ""}`}
                onClick={() => handleTabClick("Users")}>
                Users
              </button>
              <button
                className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm hover:bg-ts hover:text-c ${activeTab === "Doctors" ? "bg-ts text-c" : ""}`}
                onClick={() => handleTabClick("Doctors")}>
                Doctors
              </button>
              <button
                className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm hover:bg-ts hover:text-c ${activeTab === "Appointments" ? "bg-ts text-c" : ""}`}
                onClick={() => handleTabClick("Appointments")}>
                Appointments
              </button>
            </div>
          </div>
          {/* ---Botones Users, Doctors y Appoinments--- */}
          {/* ---Boton Export y Create New--- */}
          <div className="flex items-center mt-4 gap-x-3">
            <button className="inline-flex justify-center items-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-hb border rounded-lg gap-x-2 sm:w-auto hover:bg-ts  text-w hover:text-c border-c">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span className="font-medium">Export</span>
            </button>
            <div className="dropdown items-center">
              <div tabIndex={0} role="button" onClick={toggleDropdown}>
                <summary className="m-2 btn inline-flex justify-center items-center w-full sm:w-auto px-3 py-3 text-sm transition-colors duration-200 bg-ts border rounded-lg gap-x-2 sm:inline-block hover:bg-ts text-c border-c">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 hidden sm:inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Create New
                </summary>
              </div>
              <ul tabIndex={0} className={`bg-c text-w dropdown-content z-[1] menu p-2 shadow font-sans font-medium rounded-box w-full sm:w-40 items-center ${isOpen ? "block" : "hidden"}`}>
                <li className="content-center">
                  <button onClick={closeDropdownAndOpenCreateNewModalUser}>User</button>
                </li>
                <li className="content-center">
                  <button onClick={closeDropdownAndOpenCreateNewModalDoctor}>Doctor</button>
                </li>
                <li className="content-center">
                  <button onClick={closeDropdownAndOpenCreateNewModalAppointment}>Appointment</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ---Boton Export y Create New--- */}
        {/* ---Input Search--- */}
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="relative flex items-center mt-4 md:mt-0">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-c">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
            <input
              value={busqueda}
              type="text"
              placeholder="Search"
              onChange={handleBusquedaChange}
              className="block w-full py-1.5 pr-5 text-c bg-w border border-c rounded-lg md:w-80 placeholder-c pl-11 rtl:pr-11 rtl:pl-5 focus:border-ts  focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {/* ---Input Search--- */}
          {/* ---Span Mostrando resultados--- */}
          <div className="flex items-center gap-x-3">
            <span className="px-3 py-1 text-xs text-hb bg-w rounded-full">Mostrando 1-10 de 1000 resultados</span>
          </div>
        </div>
        {/* ---Span Mostrando resultados--- */}
        <div className="flex flex-col mt-6  max-w-full">
          <div className="-mx-4 -my-2 overflow-x-auto xl:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 ">
              <div className="overflow-hidden border border-c md:rounded-lg">
                {/* ---TABLAUSERS--- */}
                {activeTab === "Users" && (
                  <table className="min-w-full divide-y divide-c text-center">
                    {/* ---THEAD--- */}
                    <thead className="bg-c text-center">
                      <tr>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">ID</span>
                            <button onClick={() => handleOrdenar("id")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("dni")} scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">DNI/LC/LE</span>
                            <button onClick={() => handleOrdenar("dni")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("nombre")} scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Nombre Completo</span>
                            <button onClick={() => handleOrdenar("nombre")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("email")} scope="col" className="px-12 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Email</span>
                            <button onClick={() => handleOrdenar("email")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("provincia")} scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Provincia</span>
                            <button onClick={() => handleOrdenar("provincia")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("area")} scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Area</span>
                            <button onClick={() => handleOrdenar("area")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("telefono")} scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Telefono</span>
                            <button onClick={() => handleOrdenar("telefono")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("direccion")} scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Address</span>
                            <button onClick={() => handleOrdenar("direccion")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("rol")} scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Rol</span>
                            <button onClick={() => handleOrdenar("rol")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Citas
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    {/* ---THEAD--- */}
                    {/* ---TBODY--- */}
                    <tbody className="bg-white divide-y divide-c">
                      {/* Renderizar las filas filtradas */}
                      {usuariosFiltrados.map((usuario) => (
                        <tr key={usuario._id}>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{usuario._id}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{usuario.dni}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{`${usuario.name} ${usuario.lastname}`}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{usuario.email}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{usuario.province}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{usuario.area}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{usuario.phone}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{usuario.address}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{usuario.isDoctor === false && usuario.isAuditor === false ? "User" : ""}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            <button onClick={openAppointmentByIdUserModal} className="px-2 py-1 text-w bg-hb hover:bg-ts hover:text-c  rounded-lg">
                              Ver citas
                            </button>
                          </td>
                          <td>
                            <div className="flex justify-center gap-1">
                              <button className="hover:bg-w rounded focus:outline-none focus:shadow-outline" onClick={handleStarClickUsers}>
                                <img src={starFilledUsers ? estrellallena : estrellavacia} alt="Fijar" className="h-6 w-6" />
                              </button>
                              <button
                                onClick={() => {
                                  handleCaptureUserIdUpdate(usuario._id);
                                  openEditModalUser();
                                }}
                                className="hover:bg-w  rounded focus:outline-none focus:shadow-outline">
                                <img src={lapiz} alt="Editar" className="h-6 w-6" />
                              </button>
                              <button
                                onClick={() => {
                                  handleCaptureUserId(usuario._id);
                                  openDeleteModalUser();
                                }}
                                className="hover:bg-w   rounded focus:outline-none focus:shadow-outline">
                                <img src={eliminar} alt="Eliminar" className="h-6 w-6" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    {/* ---TBODY--- */}
                  </table>
                )}
                {/* ---TABLAUSERS--- */}
                {/* ---TABLADOCTORS--- */}
                {activeTab === "Doctors" && (
                  <table className="min-w-full divide-y divide-c text-center">
                    {/* ---THEAD--- */}
                    <thead className="bg-c text-center">
                      <tr>
                        <th onClick={() => handleOrdenar("id")} scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">ID</span>
                            <button onClick={() => handleOrdenar("id")} className="text-xxs text-ws bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("dni")} scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">DNI/LC/LE</span>
                            <button onClick={() => handleOrdenar("dni")} className="text-xxs text-ws bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("nombre_completo")} scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Nombre Completo</span>
                            <button onClick={() => handleOrdenar("nombre_completo")} className="text-xxs text-ws bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("email")} scope="col" className="px-12 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Email</span>
                            <button onClick={() => handleOrdenar("email")} className="text-xxs text-ws bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("especialidad")} scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Especialidad</span>
                            <button onClick={() => handleOrdenar("especialidad")} className="text-xxs text-ws bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("licencia")} scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Licencia</span>
                            <button onClick={() => handleOrdenar("licencia")} className="text-xxs text-ws bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("rol")} scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Rol</span>
                            <button onClick={() => handleOrdenar("rol")} className="text-xxs text-ws bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Citas
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    {/* ---THEAD--- */}
                    {/* ---TBODY--- */}
                    <tbody className="bg-white divide-y divide-c">
                      {doctoresFiltrados.map((doctor) => (
                        <tr key={doctor._id}>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{doctor._id}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{doctor.dni}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{`${doctor.name} ${doctor.lastname}`}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{doctor.email}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{doctor.specialty}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{doctor.licenceNumber}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{doctor.isDoctor === true && doctor.isAuditor === true ? "Auditor" : "Doctor"}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            <button onClick={openAppointmentByIdDoctorModal} className="px-2 py-1 text-w bg-hb hover:bg-ts hover:text-c  rounded-lg">
                              Ver citas
                            </button>
                          </td>
                          <td>
                            <div className="flex justify-center gap-1">
                              <button className="hover:bg-w rounded focus:outline-none focus:shadow-outline" onClick={handleStarClickDoctors}>
                                <img src={starFilledDoctors ? estrellallena : estrellavacia} alt="Fijar" className="h-6 w-6" />
                              </button>
                              <button onClick={openEditModalDoctor} className="hover:bg-w rounded focus:outline-none focus:shadow-outline">
                                <img src={lapiz} alt="Editar" className="h-6 w-6" />
                              </button>
                              <button
                                onClick={() => {
                                  handleCaptureDoctorId(doctor._id);
                                  openDeleteModalDoctor();
                                }}
                                className="hover:bg-w  rounded focus:outline-none focus:shadow-outline">
                                <img src={eliminar} alt="Eliminar" className="h-6 w-6" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    {/* ---TBODY--- */}
                  </table>
                )}
                {/* ---TABLADOCTORS--- */}
                {/* ---TABLAAPPOINTMENTS--- */}
                {activeTab === "Appointments" && (
                  <table className="min-w-full divide-y divide-c text-center">
                    {/* ---THEAD--- */}
                    <thead className="bg-c text-center">
                      <tr>
                        <th onClick={() => handleOrdenar("id")} scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">ID</span>
                            <button onClick={() => handleOrdenar("id")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("usuario")} scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">User</span>
                            <button onClick={() => handleOrdenar("usuario")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("doctor")} scope="col" className="px-12 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Doctor</span>
                            <button onClick={() => handleOrdenar("doctor")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("fecha")} scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Fecha</span>
                            <button onClick={() => handleOrdenar("fecha")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("hora")} scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Hora</span>
                            <button onClick={() => handleOrdenar("hora")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th onClick={() => handleOrdenar("estado")} scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w relative">
                          <div className="flex items-center justify-center">
                            <span className="mr-1">Estado</span>
                            <button onClick={() => handleOrdenar("estado")} className="text-xxs text-w bg-transparent border-none focus:outline-none">
                              ↑↓
                            </button>
                          </div>
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    {/* ---THEAD--- */}
                    {/* ---TBODY--- */}
                    <tbody className="bg-white divide-y divide-c">
                      {citasFiltradas.map((cita) => (
                        <tr key={cita._id}>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{cita._id}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{cita.user}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{cita.doctor}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            {" "}
                            {cita.appointmentTime.split("T")[0]} {/* Fecha */}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{cita.appointmentTime.split("T")[1].split(".")[0]}</td>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{cita.state === true ? "Activa" : "Inactiva"}</td>
                          <td>
                            <div className="flex justify-center gap-4">
                              <button className="hover:bg-w  rounded focus:outline-none focus:shadow-outline" onClick={handleStarClickAppointments}>
                                <img src={starFilledAppointments ? estrellallena : estrellavacia} alt="Fijar" className="h-6 w-6" />
                              </button>
                              <button onClick={openEditModalAppointment} className="hover:bg-w rounded focus:outline-none focus:shadow-outline">
                                <img src={lapiz} alt="Editar" className="h-6 w-6" />
                              </button>
                              <button
                                onClick={() => {
                                  handleCaptureCitaId(cita._id);
                                  openDeleteModalAppointment();
                                }}
                                className="hover:bg-w  rounded focus:outline-none focus:shadow-outline">
                                <img src={eliminar} alt="Eliminar" className="h-6 w-6" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    {/* ---TBODY--- */}
                  </table>
                )}
                {/* ---TABLAAPPOINTMENTS--- */}
              </div>
            </div>
          </div>
        </div>
        {/* ---PAGINAS--- */}
        <div className="mt-6 mb-6 sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-gray-500">
            Page <span className="font-medium text-gray-700">1 of 10</span>
          </div>
          {/* ---PAGINAS--- */}
          {/* ---BOTONES PREVIOUS AND NEXT PAGE--- */}
          <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
            <a
              href="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-w font-medium transition-colors duration-200 bg-hb border rounded-md sm:w-auto gap-x-2 hover:bg-ts hover:text-c">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              <span>Previous</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-w font-medium transition-colors duration-200 bg-hb border rounded-md sm:w-auto gap-x-2 hover:bg-ts hover:text-c">
              <span>Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
          {/* ---BOTONES PREVIOUS AND NEXT PAGE--- */}
        </div>
        {/* Modal de confirmación para eliminar Users */}
        {showDeleteModalUser && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeDeleteModalUser}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>¿Estás seguro de que quieres eliminar este Usuario?</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => handleDeleteUserConfirm(userIdToDelete)}
                  className="px-4 py-2 bg-red-500 text-white rounded mr-4 hover:bg-red-700"
                  // Llamar a la función para eliminar el elemento al confirmar
                >
                  Sí, eliminar
                </button>
                <button
                  onClick={closeDeleteModalUser}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal al cancelar
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal de confirmación para eliminar Doctors */}
        {showDeleteModalDoctor && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeDeleteModalDoctor}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>¿Estás seguro de que quieres eliminar este Doctor?</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleDeleteDoctorConfirm}
                  className="px-4 py-2 bg-red-500 text-white rounded mr-4 hover:bg-red-700"
                  // Llamar a la función para eliminar el elemento al confirmar
                >
                  Sí, eliminar
                </button>
                <button
                  onClick={closeDeleteModalDoctor}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal al cancelar
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal de confirmación para eliminar Appointments */}
        {showDeleteModalAppoinment && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeDeleteModalAppointment}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>¿Estás seguro de que quieres eliminar este Appointment?</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleDeleteCitaConfirm}
                  className="px-4 py-2 bg-red-500 text-white rounded mr-4 hover:bg-red-700"
                  // Llamar a la función para eliminar el elemento al confirmar
                >
                  Sí, eliminar
                </button>
                <button
                  onClick={closeDeleteModalAppointment}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal al cancelar
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal para editar Users */}
        {showEditModalUser && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeEditModalUser}>
            <div className="bg-c text-w rounded-lg p-8 max-w-md text-center" onClick={(e) => e.stopPropagation()}>
              <h1 className="text-3xl font-bold mb-6">Editar Usuario</h1>
              <Formik
                initialValues={{
                  dni: "",
                  nombre: "",
                  apellido: "",
                  email: "",
                  provincia: "",
                  direccion: "",
                  area: "",
                  telefono: "",
                  rol: "",
                }}
                validationSchema={userValidationSchema}
                onSubmit={(values) => {
                  console.log(values); // Aquí puedes manejar la lógica para enviar los datos del formulario
                  handleSaveChangesUserConfirm();
                  closeEditModalUser();
                }}>
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="dni" placeholder="DNI/LC/LE/PASSPORT" />
                      <ErrorMessage name="dni" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="nombre" placeholder="Nombre" />
                      <ErrorMessage name="nombre" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="apellido" placeholder="Apellido" />
                      <ErrorMessage name="apellido" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="email" className="input-field" name="email" placeholder="Correo electrónico" />
                      <ErrorMessage name="email" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="provincia" placeholder="Provincia" />
                      <ErrorMessage name="provincia" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="direccion" placeholder="Dirección" />
                      <ErrorMessage name="direccion" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="number" className="input-field" name="area" placeholder="Área" />
                      <ErrorMessage name="area" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="number" className="input-field" name="telefono" placeholder="Teléfono" />
                      <ErrorMessage name="telefono" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="rol" className="mr-6">
                        Rol:
                      </label>
                      <Field as="select" className="input-field" name="rol">
                        <option value="">Selecciona un rol</option>
                        <option value="Doctor">User</option>
                        <option value="Auditor">Doctor</option>
                      </Field>
                      <ErrorMessage name="rol" component="div" className="text-red-300" />
                    </div>
                    <div className="flex justify-between">
                      <button onClick={handleSaveChangesUserConfirm} type="submit" className="btn text-black  bg-ts hover:bg-hb hover:text-w">
                        Guardar Cambios
                      </button>
                      <button onClick={closeEditModalUser} className="btn text-black bg-ts hover:bg-hb hover:text-w">
                        Cancelar
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        )}
        {/* Modal para editar Doctors */}
        {showEditModalDoctor && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeEditModalDoctor}>
            <div className="bg-c text-w rounded-lg p-8 max-w-md text-center" onClick={(e) => e.stopPropagation()}>
              <h1 className="text-3xl font-bold mb-6">Editar Doctor</h1>
              <Formik
                initialValues={{
                  dni: "",
                  nombre: "",
                  apellido: "",
                  email: "",
                  password: "",
                  especialidad: "",
                  numLicencia: "",
                  rol: "",
                }}
                validationSchema={doctorValidationSchema}
                onSubmit={(values) => {
                  console.log(values); // Aquí puedes manejar la lógica para enviar los datos del formulario
                  closeEditModalDoctor();
                  handleSaveChangesDoctorConfirm();
                }}>
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="dni" placeholder="DNI/LC/LE/PASSPORT" />
                      <ErrorMessage name="dni" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="nombre" placeholder="Nombre" />
                      <ErrorMessage name="nombre" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="apellido" placeholder="Apellido" />
                      <ErrorMessage name="apellido" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="email" className="input-field" name="email" placeholder="Correo electrónico" />
                      <ErrorMessage name="email" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="password" className="input-field" name="password" placeholder="Contraseña" />
                      <ErrorMessage name="password" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="especialidad" placeholder="Especialidad" />
                      <ErrorMessage name="especialidad" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="numLicencia" placeholder="Numero de Licencia" />
                      <ErrorMessage name="numLicencia" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="rol" className="mr-6">
                        Rol:
                      </label>
                      <Field as="select" className="input-field" name="rol">
                        <option value="">Selecciona un rol</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Auditor">Auditor</option>
                      </Field>
                      <ErrorMessage name="rol" component="div" className="text-red-300" />
                    </div>
                    <div className="flex justify-between">
                      <button type="submit" className="btn text-black  bg-ts hover:bg-hb hover:text-w">
                        Guardar Cambios
                      </button>
                      <button onClick={closeEditModalDoctor} className="btn text-black bg-ts hover:bg-hb hover:text-w">
                        Cancelar
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        )}
        {/* Modal para editar Appointments */}
        {showEditModalAppoinment && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeEditModalAppointment}>
            <div className="bg-c text-w rounded-lg p-8 max-w-md text-center" onClick={(e) => e.stopPropagation()}>
              <h1 className="text-3xl font-bold mb-6">Editar Cita</h1>
              <Formik
                initialValues={{
                  usuario: "",
                  doctor: "",
                  fecha: "",
                  hora: "",
                  estado: "",
                }}
                validationSchema={appointmentValidationSchema}
                onSubmit={(values) => {
                  console.log(values);
                  closeEditModalAppointment();
                  handleSaveChangesAppoinmentConfirm(); // Aquí puedes manejar la lógica para enviar los datos del formulario
                }}>
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="usuario" placeholder="Usuario" />
                      <ErrorMessage name="usuario" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="doctor" placeholder="Doctor" />
                      <ErrorMessage name="doctor" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="fecha" placeholder="Fecha" />
                      <ErrorMessage name="fecha" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="hora" placeholder="Hora" />
                      <ErrorMessage name="hora" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="estado" placeholder="Estado" />
                      <ErrorMessage name="estado" component="div" className="text-red-300" />
                    </div>
                    <div className="flex justify-between">
                      <button type="submit" className="btn text-black  bg-ts hover:bg-hb hover:text-w">
                        Guardar Cambios
                      </button>
                      <button onClick={closeEditModalAppointment} className="btn text-black bg-ts hover:bg-hb hover:text-w">
                        Cancelar
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        )}
        {/* Modal de confirmación de eliminar User */}
        {showSuccessModalUser && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={handleCerrarDeleteUserSucess}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>Usuario eliminado correctamente.</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleCerrarDeleteUserSucess}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal de confirmación
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal de confirmación de eliminar Doctor */}
        {showSuccessModalDoctor && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={handleCerrarDeleteDoctorSucess}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>Doctor eliminado correctamente.</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleCerrarDeleteDoctorSucess}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal de confirmación
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal de confirmación de eliminar Doctor */}
        {showSuccessModalAppoinment && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={handleCerrarDeleteAppoinmentSucess}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>Doctor eliminado correctamente.</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleCerrarDeleteAppoinmentSucess}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal de confirmación
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal de confirmación de guardar cambios de User */}
        {showSaveChangesModalUser && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={handleCerrarSaveChangesUserSuccess}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>Cambios guardados correctamente.</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    handleCerrarSaveChangesUserSuccess();
                    closeEditModalUser();
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal de confirmación
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {showSaveChangesModalDoctor && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={handleCerrarSaveChangesDoctorSuccess}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>Cambios guardados correctamente.</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    handleCerrarSaveChangesDoctorSuccess();
                    closeEditModalDoctor();
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal de confirmación
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal de confirmación de guardar cambios de User */}
        {showSaveChangesModalAppoinment && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={handleCerrarSaveChangesAppoinmentSuccess}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>Cambios guardados correctamente.</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    handleCerrarSaveChangesAppoinmentSuccess();
                    closeEditModalAppointment();
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal de confirmación
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal para Crear Nuevos Users */}
        {showCreateNewModalUser && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeCreateNewModalUser}>
            <div className="bg-c text-w rounded-lg p-8 max-w-md text-center" onClick={(e) => e.stopPropagation()}>
              <h1 className="text-3xl font-bold mb-6">Crear Usuario</h1>
              <Formik
                initialValues={{
                  dni: "",
                  nombre: "",
                  apellido: "",
                  email: "",
                  password: "",
                  provincia: "",
                  direccion: "",
                  area: "",
                  telefono: "",
                  rol: "",
                }}
                validationSchema={userValidationSchema}
                onSubmit={(values) => {
                  console.log(values); // Aquí puedes manejar la lógica para enviar los datos del formulario
                  closeCreateNewModalUser();
                  handleCreateNewUserConfirm();
                }}>
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="dni" placeholder="DNI/LC/LE/PASSPORT" />
                      <ErrorMessage name="dni" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="nombre" placeholder="Nombre" />
                      <ErrorMessage name="nombre" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="apellido" placeholder="Apellido" />
                      <ErrorMessage name="apellido" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="email" className="input-field" name="email" placeholder="Correo electrónico" />
                      <ErrorMessage name="email" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="password" className="input-field" name="password" placeholder="Contraseña" />
                      <ErrorMessage name="password" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="provincia" placeholder="Provincia" />
                      <ErrorMessage name="provincia" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="direccion" placeholder="Dirección" />
                      <ErrorMessage name="direccion" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="number" className="input-field" name="area" placeholder="Área" />
                      <ErrorMessage name="area" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="number" className="input-field" name="telefono" placeholder="Teléfono" />
                      <ErrorMessage name="telefono" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="rol" className="mr-6">
                        Rol:
                      </label>
                      <Field as="select" className="input-field" name="rol">
                        <option value="">Selecciona un rol</option>
                        <option value="Doctor">User</option>
                        <option value="Auditor">Doctor</option>
                      </Field>
                      <ErrorMessage name="rol" component="div" className="text-red-300" />
                    </div>
                    <div className="flex justify-between">
                      <button type="submit" className="btn text-black  bg-ts hover:bg-hb hover:text-w">
                        Crear usuario
                      </button>
                      <button onClick={closeCreateNewModalUser} className="btn text-black bg-ts hover:bg-hb hover:text-w">
                        Cancelar
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        )}
        {/* Modal para Crear Nuevos Doctors */}
        {showCreateNewModalDoctor && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeCreateNewModalDoctor}>
            <div className="bg-c text-w rounded-lg p-8 max-w-md text-center" onClick={(e) => e.stopPropagation()}>
              <h1 className="text-3xl font-bold mb-6">Crear Doctor</h1>
              <Formik
                initialValues={{
                  dni: "",
                  nombre: "",
                  apellido: "",
                  email: "",
                  password: "",
                  especialidad: "",
                  numLicencia: "",
                  rol: "",
                }}
                validationSchema={doctorValidationSchema}
                onSubmit={(values) => {
                  console.log(values); // Aquí puedes manejar la lógica para enviar los datos del formulario
                  closeCreateNewModalDoctor();
                  handleCreateNewDoctorConfirm();
                }}>
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="dni" placeholder="DNI/LC/LE/PASSPORT" />
                      <ErrorMessage name="dni" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="nombre" placeholder="Nombre" />
                      <ErrorMessage name="nombre" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="apellido" placeholder="Apellido" />
                      <ErrorMessage name="apellido" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="email" className="input-field" name="email" placeholder="Correo electrónico" />
                      <ErrorMessage name="email" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="password" className="input-field" name="password" placeholder="Contraseña" />
                      <ErrorMessage name="password" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="especialidad" placeholder="Especialidad" />
                      <ErrorMessage name="especialidad" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="numLicencia" placeholder="Numero de Licencia" />
                      <ErrorMessage name="numLicencia" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="rol" className="mr-6">
                        Rol:
                      </label>
                      <Field as="select" className="input-field" name="rol">
                        <option value="">Selecciona un rol</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Auditor">Auditor</option>
                      </Field>
                      <ErrorMessage name="rol" component="div" className="text-red-300" />
                    </div>
                    <div className="flex justify-between">
                      <button type="submit" className="btn text-black  bg-ts hover:bg-hb hover:text-w">
                        Crear doctor
                      </button>
                      <button onClick={closeCreateNewModalDoctor} className="btn text-black bg-ts hover:bg-hb hover:text-w">
                        Cancelar
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        )}
        {/* Modal para Crear Nuevos Appointments */}
        {showCreateNewModalAppoinment && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeCreateNewModalAppointment}>
            <div className="bg-c text-w rounded-lg p-8 max-w-md text-center" onClick={(e) => e.stopPropagation()}>
              <h1 className="text-3xl font-bold mb-6">Crear Cita</h1>
              <Formik
                initialValues={{
                  usuario: "",
                  doctor: "",
                  fecha: "",
                  hora: "",
                  estado: "",
                }}
                validationSchema={appointmentValidationSchema}
                onSubmit={(values) => {
                  console.log(values);
                  closeCreateNewModalAppointment();
                  handleCreateNewAppoinmentConfirm(); // Aquí puedes manejar la lógica para enviar los datos del formulario
                }}>
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="usuario" placeholder="Usuario" />
                      <ErrorMessage name="usuario" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="doctor" placeholder="Doctor" />
                      <ErrorMessage name="doctor" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="fecha" placeholder="Fecha" />
                      <ErrorMessage name="fecha" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="hora" placeholder="Hora" />
                      <ErrorMessage name="hora" component="div" className="text-red-300" />
                    </div>
                    <div className="mb-4">
                      <Field type="text" className="input-field" name="estado" placeholder="Estado" />
                      <ErrorMessage name="estado" component="div" className="text-red-300" />
                    </div>
                    <div className="flex justify-between">
                      <button type="submit" className="btn text-black  bg-ts hover:bg-hb hover:text-w">
                        Crear cita
                      </button>
                      <button onClick={closeCreateNewModalAppointment} className="btn text-black bg-ts hover:bg-hb hover:text-w">
                        Cancelar
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        )}
        {showCreateNewModalUserConfirm && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={handleCerrarCreateNewUserSuccess}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>Usuario creado correctamente.</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    handleCerrarCreateNewUserSuccess();
                    closeCreateNewModalUser();
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal de confirmación
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {showCreateNewModalDoctorConfirm && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={handleCerrarCreateNewDoctorSuccess}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>Doctor creado correctamente.</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    handleCerrarCreateNewDoctorSuccess();
                    closeCreateNewModalDoctor();
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal de confirmación
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal de confirmación de guardar cambios de User */}
        {showCreateNewModalAppoinmentConfirm && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={handleCerrarCreateNewAppoinmentSuccess}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <p>Cita creada correctamente.</p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    handleCerrarCreateNewAppoinmentSuccess();
                    closeCreateNewModalAppointment();
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal de confirmación
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal de appoinments By Id User */}
        {showAppointmentbyIdUserModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeAppointmentByIdUserModal}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <div className="citas-contenedor max-h-80 overflow-y-auto bg-w">
                {/* Contenedor de citas */}
                <div className="cita-tarjeta m-2">
                  <h3>Cita 1</h3>
                  <p>Detalles de la cita 1...</p>
                </div>
                <div className="cita-tarjeta m-2">
                  <h3>Cita 2</h3>
                  <p>Detalles de la cita 2...</p>
                </div>
                <div className="cita-tarjeta m-2">
                  <h3>Cita 3</h3>
                  <p>Detalles de la cita 3...</p>
                </div>
                {/* Agrega más divs de citas según sea necesario */}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    closeAppointmentByIdUserModal();
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal de confirmación
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal de appoinments By Id Doctor */}
        {showAppointmentbyIdDoctorModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center" onClick={closeAppointmentByIdDoctorModal}>
            <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <div className="citas-contenedor max-h-80 overflow-y-auto bg-w">
                {/* Contenedor de citas */}
                <div className="cita-tarjeta m-2">
                  <h3>Cita 1</h3>
                  <p>Detalles de la cita 1...</p>
                </div>
                <div className="cita-tarjeta m-2">
                  <h3>Cita 2</h3>
                  <p>Detalles de la cita 2...</p>
                </div>
                <div className="cita-tarjeta m-2">
                  <h3>Cita 3</h3>
                  <p>Detalles de la cita 3...</p>
                </div>
                {/* Agrega más divs de citas según sea necesario */}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    closeAppointmentByIdDoctorModal();
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-w"
                  // Llamar a la función para cerrar la modal de confirmación
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Table;
