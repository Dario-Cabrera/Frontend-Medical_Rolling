import { useContext, createContext, useState, useEffect } from "react";
import { registerRequestDoctor, loginRequestDoctor, varityDoctorRequest, varityDoctorRequest2 } from "../api/doctor.auth";

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
      const res = await registerRequestDoctor(doctor);
      setDoctor(res.data);
      setIsAuthenticatedDoctor(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (doctor) => {
    try {
      const res = await loginRequestDoctor(doctor);
      const dataDoctor = res.data;
      localStorage.setItem("Id_doctor", dataDoctor.id);
      const resDoctor = await varityDoctorRequest({ dataDoctor });
      setDoctor(resDoctor);
      setIsAuthenticatedDoctor(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };
  const logoutDoctor = () => {
    localStorage.removeItem("Id_doctor");
    setDoctor(null);
    setIsAuthenticatedDoctor(false);
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
        if (!res) {
          setIsAuthenticatedDoctor(false);
          setLoadingDoctor(false);
          return;
        }
        setIsAuthenticatedDoctor(true);
        setDoctor(res);
        setLoadingDoctor(false);
      } catch (error) {
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
        logoutDoctor,
        loadingDoctor,
        doctor,
        isAuthenticatedDoctor,
        errors,
      }}>
      {children}
    </DoctorContext.Provider>
  );
};
