import { userAuth } from "../Context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouteUser = () => {
  const { loadingUser, isAuthenticatedUser } = userAuth();
  if (loadingUser) return <h1>loadingUser...</h1>;
  if (!loadingUser && !isAuthenticatedUser) return <Navigate to="/loginUser/" />;
  return <Outlet />;
};
