/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState, useContext, useEffect } from "react";

import { registerRequestUser, loginRequestUser, varityTokenRequest } from "../api/user.auth";

export const UserContext = createContext();

export const userAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("userAuth must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [auditor, setAuditor] = useState(null);
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const [isAuthenticatedDoctor, setIsAuthenticatedDoctor] = useState(false);
  const [isAuthenticatedAuditor, setIsAuthenticatedAuditor] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);

  const signup = async (user) => {
    try {
      user.area = parseInt(user.area);
      user.phone = parseInt(user.phone);
      user.dni = parseInt(user.dni);
      user.licenceNumber = parseInt(user.licenceNumber);
      const res = await registerRequestUser(user);

      const token = res.data;
      localStorage.setItem("token", token);

      setUser(res.data);
      setIsAuthenticatedUser(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequestUser(user);

      const token = res.data;

      localStorage.setItem("token", token);

      const resUser = await varityTokenRequest({ token });
      const { isDoctor, isAuditor } = resUser;

      if (!isDoctor && !isAuditor) {
        setIsAuthenticatedUser(true);
        setUser(resUser);
      } else if (isDoctor && !isAuditor) {
        setDoctor(resUser);
        setIsAuthenticatedDoctor(true);
      } else {
        setAuditor(resUser);
        setIsAuthenticatedAuditor(true);
      }
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);

    setDoctor(null);
    setAuditor(null);
    setIsAuthenticatedUser(false);
    setIsAuthenticatedDoctor(false);
    setIsAuthenticatedAuditor(false);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [[errors]]);

  useEffect(() => {
    async function checkLogin() {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticatedUser(false);
        setUser(null);
        setIsAuthenticatedUser(false);
        setLoadingUser(false);
        setDoctor(null);
        setAuditor(null);
        return;
      }
      try {
        const res = await varityTokenRequest({ token });
        const { isDoctor, isAuditor } = res;
        if (!res) {
          setIsAuthenticatedUser(false);
          setLoadingUser(false);
          setDoctor(null);
          setAuditor(null);
          return;
        }

        if (!isDoctor && !isAuditor) {
          setIsAuthenticatedUser(true);
          setUser(res);
        } else if (isDoctor && !isAuditor) {
          setIsAuthenticatedDoctor(true);
          setDoctor(res);
        } else {
          setIsAuthenticatedAuditor(true);
          setAuditor(res);
        }

        setLoadingUser(false);
      } catch (error) {
        setIsAuthenticatedUser(false);
        setIsAuthenticatedDoctor(false);
        setIsAuthenticatedAuditor(false);
        setUser(null);

        setDoctor(null);
        setAuditor(null);

        setLoadingUser(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        signup,
        signin,
        logoutUser,
        loadingUser,
        user,
        doctor,
        auditor,
        isAuthenticatedUser,
        isAuthenticatedDoctor,
        isAuthenticatedAuditor,
        errors,
      }}>
      {children}
    </UserContext.Provider>
  );
};
