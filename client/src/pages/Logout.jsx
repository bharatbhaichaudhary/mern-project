import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

const Logout = () => {
  const { LogoutUSer } = useAuth();
  useEffect(() => {
    LogoutUSer();
  }, [LogoutUSer]);
  return <Navigate to="/login" />;
};

export default Logout;
