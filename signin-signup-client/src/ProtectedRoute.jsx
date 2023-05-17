/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token == null || undefined) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
