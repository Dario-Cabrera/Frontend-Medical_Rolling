import { userAuth } from "../Context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouteDoctor = () => {
  const { loadingUser, isAuthenticatedDoctor } = userAuth();
  if (loadingUser) return <h1>loadingDoctor...</h1>;
  if (!loadingUser && !isAuthenticatedDoctor) return <Navigate to="/loginUser/" />;
  return <Outlet />;
};
