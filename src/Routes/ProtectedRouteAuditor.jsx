import { userAuth } from "../Context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouteAuditor = () => {
  const { loadingUser, isAuthenticatedAuditor } = userAuth();
  if (loadingUser) return <h1>loadingAuditor...</h1>;
  if (!loadingUser && !isAuthenticatedAuditor) return <Navigate to="/loginUser/" />;
  return <Outlet />;
};
