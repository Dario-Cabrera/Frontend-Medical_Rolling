import { doctorAuth } from "../Context/DoctorContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouteDoctor = () => {
  const { loadingDoctor, isAuthenticatedDoctor } = doctorAuth();
  console.log(loadingDoctor, isAuthenticatedDoctor);
  if (loadingDoctor) return <h1>loadingDoctor...</h1>;
  if (!loadingDoctor && !isAuthenticatedDoctor) return <Navigate to="/loginDoctor/" />;
  return <Outlet />;
};
