/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState, useContext, useEffect } from "react";
import { registerRequestUser, loginRequestUser } from "../api/user.auth";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const signup = async (user) => {
    try {
      user.area = parseInt(user.area);
      user.phone = parseInt(user.phone);
      const res = await registerRequestUser(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequestUser(user);
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
    } //se ejecuta cuando se desmonta el componente
  }, [[errors]]);
  return (
    <UserContext.Provider
      value={{ signup, signin, user, isAuthenticated, errors }}
    >
      {children}
    </UserContext.Provider>
  );
};
