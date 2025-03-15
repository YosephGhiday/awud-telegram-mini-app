import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");
  const data = localStorage.getItem("data");

  if (data == null || token == null) {
    return <Navigate to="/awud-telegram-mini-app/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
