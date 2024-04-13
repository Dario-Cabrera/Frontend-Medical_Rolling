import { useState } from "react";
import eliminar from "../../assets/img/trash and edit/eliminar.png";
import lapiz from "../../assets/img/trash and edit/lapiz.png";
import estrellavacia from "../../assets/img/fijar/estrellavacia.png";
import estrellallena from "../../assets/img/fijar/estrellallena.png";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Table = () => {
  // Funciones para cambiar de tabla con botones
  const [activeTab, setActiveTab] = useState("Users");

  // Funciones para cambiar el estado de la estrella
  const [starFilledUsers, setStarFilledUsers] = useState(false); // Estado para controlar la estrella de Users
  const [starFilledDoctors, setStarFilledDoctors] = useState(false); // Estado para controlar la estrella de Doctors
  const [starFilledAppointments, setStarFilledAppointments] = useState(false); // Estado para controlar la estrella de Appointments

  const [showDeleteModalUser, setShowDeleteModalUser] = useState(false); // Estado para controlar la visibilidad de la modal Users
  const [showDeleteModalDoctor, setShowDeleteModalDoctor] = useState(false); // Estado para controlar la visibilidad de la modal Doctors
  const [showDeleteModalAppoinment, setShowDeleteModalAppoinment] = useState(false); // Estado para controlar la visibilidad de la modal Doctors

  const [showEditModalUser, setShowEditModalUser] = useState(false); // Estado para controlar la visibilidad de la modal Users
  const [showEditModalDoctor, setShowEditModalDoctor] = useState(false); // Estado para controlar la visibilidad de la modal Doctors
  const [showEditModalAppoinment, setShowEditModalAppoinment] = useState(false); // Estado para controlar la visibilidad de la modal Doctors

  const commonValidationSchema = Yup.object().shape({
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
      .required("El correo electrónico es requerido"),
    dni: Yup.string().required("El DNI es requerido"),
    nombre: Yup.string().required("El nombre es requerido"),
    apellido: Yup.string().required("El apellido es requerido"),
    provincia: Yup.string().required("La provincia es requerida"),
    direccion: Yup.string().required("La dirección es requerida"),
    area: Yup.number().required("El área es requerida"),
    rol: Yup.string().required("El rol es requerido"),
  });

  const userValidationSchema = Yup.object().shape({
    ...commonValidationSchema.fields,
  });

  const doctorValidationSchema = Yup.object().shape({
    ...commonValidationSchema.fields,
    especialidad: Yup.string().required("La especialidad es requerida"),
    numLicencia: Yup.string().required("El número de licencia es requerido"),
  });

  const appointmentValidationSchema = Yup.object().shape({
    ...commonValidationSchema.fields,
    usuario: Yup.string().required("El usuario es requerido"),
    doctor: Yup.string().required("El doctor es requerido"),
    fecha: Yup.string().required("La fecha es requerida"),
    hora: Yup.string().required("La hora es requerida"),
    estado: Yup.string().required("El estado es requerido"),
  });

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

  return (
    <div className="bg-w">
      {/* component */}
      <section className="container mx-auto font-sans">
        {/* ---Boton Export y Create New--- */}
        <div className="sm:flex sm:items-center sm:justify-between">
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
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-c transition-colors duration-200 bg-ts border rounded-lg border-c shrink-0 sm:w-auto gap-x-2 hover:bg-hb hover:text-ts">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Create New</span>
            </button>
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
              type="text"
              placeholder="Search"
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
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-c md:rounded-lg">
                {/* ---TABLAUSERS--- */}
                {activeTab === "Users" && (
                  <table className="min-w-full divide-y divide-c text-center">
                    {/* ---THEAD--- */}
                    <thead className="bg-c text-center">
                      <tr>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w">
                          ID
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w">
                          DNI/LC/LE/PASSPORT
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w">
                          Nombre Completo
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-sm font-medium text-center text-w">
                          Email
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Provincia
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Area
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Telefono
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Addres
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Password
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Rol
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
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">66072d6829f6eb684a0db0fa</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">32186792</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">Emily Brown</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">emily.brown@example.com</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">Florida</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">(456)</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">(456) 789-0123</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">Lavalle 1589</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">Juan1120p*</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">User</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                          <button className="px-2 py-1 text-w bg-hb hover:bg-ts hover:text-c  rounded-lg">Ver citas</button>
                        </td>
                        <td>
                          <div className="flex justify-center gap-1">
                            <button className="hover:bg-w rounded focus:outline-none focus:shadow-outline" onClick={handleStarClickUsers}>
                              <img src={starFilledUsers ? estrellallena : estrellavacia} alt="Fijar" className="h-6 w-6" />
                            </button>
                            <button onClick={openEditModalUser} className="hover:bg-w  rounded focus:outline-none focus:shadow-outline">
                              <img src={lapiz} alt="Editar" className="h-6 w-6" />
                            </button>
                            <button onClick={openDeleteModalUser} className="hover:bg-w   rounded focus:outline-none focus:shadow-outline">
                              <img src={eliminar} alt="Eliminar" className="h-6 w-6" />
                            </button>
                          </div>
                        </td>
                      </tr>
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
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w">
                          ID
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w">
                          DNI/LC/LE/PASSPORT
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w">
                          Nombre Completo
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-sm font-medium text-center text-w">
                          Email
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Password
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Especialidad
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Licencia
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Rol
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
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">6607279d8734a52645ec9017</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">29563842</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">Jose Rodriguez</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">jose.rodriguez@example.com</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">passgenerico*1</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">Cardiologia</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">4527695123</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">Doctor</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                          <button className="px-2 py-1 text-w bg-hb hover:bg-ts hover:text-c  rounded-lg">Ver citas</button>
                        </td>
                        <td>
                          <div className="flex justify-center gap-1">
                            <button className="hover:bg-w rounded focus:outline-none focus:shadow-outline" onClick={handleStarClickDoctors}>
                              <img src={starFilledDoctors ? estrellallena : estrellavacia} alt="Fijar" className="h-6 w-6" />
                            </button>
                            <button onClick={openEditModalDoctor} className="hover:bg-w rounded focus:outline-none focus:shadow-outline">
                              <img src={lapiz} alt="Editar" className="h-6 w-6" />
                            </button>
                            <button onClick={openDeleteModalDoctor} className="hover:bg-w  rounded focus:outline-none focus:shadow-outline">
                              <img src={eliminar} alt="Eliminar" className="h-6 w-6" />
                            </button>
                          </div>
                        </td>
                      </tr>
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
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w">
                          ID
                        </th>
                        <th scope="col" className="py-3.5 px-4 text-sm font-medium text-center text-w">
                          User
                        </th>
                        <th scope="col" className="px-12 py-3.5 text-sm font-medium text-center text-w">
                          Doctor
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Fecha
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Hora
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Estado
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-sm font-medium text-center text-w">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    {/* ---THEAD--- */}
                    {/* ---TBODY--- */}
                    <tbody className="bg-white divide-y divide-c">
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">66049ab2d3489c6550da65c3</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">Juan Perez</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">Dra. Gomez Silvia</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">19/04/2024</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">18:00</td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">Activa</td>
                        <td>
                          <div className="flex justify-center gap-4">
                            {" "}
                            <td>
                              <div className="flex justify-center gap-1">
                                <button className="hover:bg-w  rounded focus:outline-none focus:shadow-outline" onClick={handleStarClickAppointments}>
                                  <img src={starFilledAppointments ? estrellallena : estrellavacia} alt="Fijar" className="h-6 w-6" />
                                </button>
                                <button onClick={openEditModalAppointment} className="hover:bg-w rounded focus:outline-none focus:shadow-outline">
                                  <img src={lapiz} alt="Editar" className="h-6 w-6" />
                                </button>
                                <button onClick={openDeleteModalAppointment} className="hover:bg-w  rounded focus:outline-none focus:shadow-outline">
                                  <img src={eliminar} alt="Eliminar" className="h-6 w-6" />
                                </button>
                              </div>
                            </td>
                          </div>
                        </td>
                      </tr>
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
                  password: "",
                  provincia: "",
                  direccion: "",
                  area: "",
                  telefono: "",
                  rol: "",
                }}
                validationSchema={userValidationSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log(values); // Aquí puedes manejar la lógica para enviar los datos del formulario
                  resetForm();
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
                      <Field type="text" className="input-field" name="rol" placeholder="Rol" />
                      <ErrorMessage name="rol" component="div" className="text-red-300" />
                    </div>
                    <div className="flex justify-between">
                      <button type="submit" className="btn text-black  bg-ts hover:bg-hb hover:text-w">
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
                onSubmit={(values, { resetForm }) => {
                  console.log(values); // Aquí puedes manejar la lógica para enviar los datos del formulario
                  resetForm();
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
                      <Field type="text" className="input-field" name="rol" placeholder="Rol" />
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
                onSubmit={(values, { resetForm }) => {
                  console.log(values); // Aquí puedes manejar la lógica para enviar los datos del formulario
                  resetForm();
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
                      <Field type="email" className="input-field" name="fecha" placeholder="Fecha" />
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
      </section>
    </div>
  );
};

export default Table;
