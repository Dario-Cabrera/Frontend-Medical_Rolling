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
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const signup = async (user) => {
    try {
      user.area = parseInt(user.area);
      user.phone = parseInt(user.phone);
      const res = await registerRequestUser(user);
      // const token = res.data;
      // localStorage.setItem("token", token);
      // console.log(token);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticatedUser(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequestUser(user);
      const token = res.data; // Suponiendo que el token está devuelto en res.data
      console.log(res.data);
      localStorage.setItem("token", token);
      const resUser = await varityTokenRequest({ token });
      setUser(resUser);
      setIsAuthenticatedUser(true);
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
    setIsAuthenticatedUser(false);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    } //se ejecuta cuando se desmonta el componente
  }, [[errors]]);

  useEffect(() => {
    async function checkLogin() {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticatedUser(false);
        setLoadingUser(false);
        return setUser(null);
      }
      try {
        console.log(token);
        const res = await varityTokenRequest({ token });
        console.log("Estoy debajo del await", res);
        console.log(res);
        if (!res) {
          setIsAuthenticatedUser(false);
          setLoadingUser(false);
          return;
        }
        setIsAuthenticatedUser(true);
        setUser(res);
        setLoadingUser(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticatedUser(false);
        setUser(null);
        setLoadingUser(false);
      }
    }
    checkLogin();
  }, []);

  return <UserContext.Provider value={{ signup, signin, logoutUser, loadingUser, user, isAuthenticatedUser, errors }}>{children}</UserContext.Provider>;
};
