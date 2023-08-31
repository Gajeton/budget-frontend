import { useAuth0 } from "@auth0/auth0-react";
import { ComponentType } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface AuthenticationGuardProps {
  component: ComponentType
}


export const AuthenticationGuard = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }


};

