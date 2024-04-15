/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, createContext, useState, useEffect } from "react";
import { registerRequestDoctor, loginRequestDoctor } from "../api/doctor.auth";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const signup = async (doctor) => {
    try {
      doctor.LicenceNumber = parseInt(doctor.LicenceNumber);

      const res = await registerRequestDoctor(doctor);
      console.log(res.data);
      setDoctor(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const signin = async (doctor) => {
    try {
      const res = await loginRequestDoctor(doctor);
      console.log(res);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };
  
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
      value={{ signup, signin, doctor, isAuthenticated, errors }}
    >
      {children}
    </DoctorContext.Provider>
  );
};
