/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, createContext, useState, useEffect } from "react";
import {
  registerRequestDoctor,
  loginRequestDoctor,
  varityDoctorRequest,
  varityDoctorRequest2,
} from "../api/doctor.auth";

export const DoctorContext = createContext();

export const doctorAuth = () => {
  const context = useContext(DoctorContext);
  if (!context) {
    throw new Error("useDoctor must be used within a DoctorProvider");
  }
  return context;
};

export const DoctorProvider = ({ children }) => {
  const [doctor, setDoctor] = useState(null);
  const [isAuthenticatedDoctor, setIsAuthenticatedDoctor] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loadingDoctor, setLoadingDoctor] = useState(true);
  const signup = async (doctor) => {
    try {
      doctor.LicenceNumber = parseInt(doctor.LicenceNumber);

      const res = await registerRequestDoctor(doctor);
      /* console.log(res.data); */
      setDoctor(res.data);
      setIsAuthenticatedDoctor(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const signin = async (doctor) => {
    try {
      const res = await loginRequestDoctor(doctor);
      /*       console.log("Viendo que llega del primer await",res); //VER QUE ESTA LLEGANOD AQUI
       */ const dataDoctor = res.data; //Comprobar que tienen la data que llega del back
      localStorage.setItem("Id_doctor", dataDoctor.id);
      /*       console.log("dataDoctor",dataDoctor)
       */ const resDoctor = await varityDoctorRequest({ dataDoctor });
      /*       console.log("Esto es resDoctor",resDoctor);
       */ setDoctor(resDoctor);
      setIsAuthenticatedDoctor(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };
  useEffect(() => {
    async function checkLogin() {
      const dataDoctorId = localStorage.getItem("Id_doctor");

      if (!dataDoctorId) {
        setIsAuthenticatedDoctor(false);
        setLoadingDoctor(false);
        setDoctor(null);
        return;
      }
      try {
        const res = await varityDoctorRequest2(dataDoctorId);
        console.log("estou debajo del await ", res);
        if (!res) {
          setIsAuthenticatedDoctor(false);
          setLoadingDoctor(false);
          return;
        }
        setIsAuthenticatedDoctor(true)
        setDoctor(res);
        setLoadingDoctor(false);
      } catch (error) {
        console.log("error", error);
        setIsAuthenticatedDoctor(false);
        setDoctor(null);
        setLoadingDoctor(false);
      }
    }
    checkLogin();
  }, []);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <DoctorContext.Provider
      value={{
        signup,
        signin,
        loadingDoctor,
        doctor,
        isAuthenticatedDoctor,
        errors,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};
